import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGOUT } from '../../../store/actions/types';
import { refreshToken } from '../../../store/actions/auth';
import Menu from '../Menu';
import styles from './index.module.scss';

function Header() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const access = JSON.parse(localStorage.getItem('accessToken'));
    const refresh  = JSON.parse(localStorage.getItem('refreshToken'));

    if (access && refresh) {
      const decodedAccess = decode(access);
      if (decodedAccess.exp * 1000 < new Date().getTime()) {
        const decodedRefresh = decode(refresh);
        if (decodedRefresh.exp * 1000 < new Date().getTime()) {
          dispatch({ type: LOGOUT });
          history.push('/login');
        } else {
          try {
            dispatch(refreshToken({ token: refresh }, history));
          } catch (error) {
            console.log(error);
          }
        }
      };
    }
  }, [location, dispatch, history, user]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/"><div className={styles.logoImage} /></a>
          <div className={styles.logoText}>
            Garage Sales
          </div>
        </div>

        <div className={styles.nav}>
          <Menu />
        </div>
      </header>
    </>
  );
}

export default Header;
