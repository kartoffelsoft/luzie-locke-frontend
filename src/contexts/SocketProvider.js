import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

import { useAuth } from './AuthProvider';

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth) {
      const sk = io(process.env.REACT_APP_BACKEND_URL, {
        query: { uid: auth._id },
      });
      setSocket(sk);

      return () => {
        sk.close();
      };
    }
  }, [auth]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
