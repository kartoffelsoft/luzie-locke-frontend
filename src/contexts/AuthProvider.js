import React, { useContext, useCallback, useState } from 'react';
import decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

import * as api from '../api/index.js';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ uid, children }) {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('profile')));
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem('accessToken'))
  );
  const [refreshToken, setRefreshToken] = useState(
    JSON.parse(localStorage.getItem('refreshToken'))
  );
  const history = useHistory();

  const login = useCallback(
    async (token) => {
      try {
        const { data } = await api.loginGoogle({ token });
        localStorage.setItem('profile', JSON.stringify(data?.profile));
        localStorage.setItem('accessToken', JSON.stringify(data?.accessToken));
        localStorage.setItem(
          'refreshToken',
          JSON.stringify(data?.refreshToken)
        );

        setAuth(JSON.parse(localStorage.getItem('profile')));
        setAccessToken(JSON.parse(localStorage.getItem('accessToken')));
        setRefreshToken(JSON.parse(localStorage.getItem('refreshToken')));

        history.push('/items/garage');
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const logout = useCallback(() => {
    localStorage.clear();
    setAuth(null);
    setAccessToken(null);
    setRefreshToken(null);
  }, []);

  const updateLocation = useCallback(async (name, lat, lng, history) => {
    try {
      const { data } = await api.updateLocation({ name, lat, lng });
      localStorage.setItem('profile', JSON.stringify(data?.profile));
      setAuth(JSON.parse(localStorage.getItem('profile')));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const verifyAuth = useCallback(async () => {
    if (accessToken && refreshToken) {
      const decodedAccess = decode(accessToken);

      if (decodedAccess.exp * 1000 < new Date().getTime() + 60 * 60 * 1000) {
        const decodedRefresh = decode(refreshToken);
        if (decodedRefresh.exp * 1000 < new Date().getTime()) {
          logout();
          history.push('/login');
        } else {
          try {
            const { data } = await api.refreshToken({ token: refreshToken });
            console.log(data);

            if (data.success) {
              console.log('Token refreshed');
              localStorage.setItem(
                'accessToken',
                JSON.stringify(data?.accessToken)
              );
              setAccessToken(JSON.parse(localStorage.getItem('accessToken')));
            } else {
              console.log('Token refresh was unsuccessful.');
              logout();
              history.push('/login');
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  }, [accessToken, refreshToken, logout, history]);

  const value = {
    auth,
    accessToken,
    refreshToken,
    login,
    logout,
    updateLocation,
    verifyAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
