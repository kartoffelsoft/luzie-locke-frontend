import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ uid, children }) {
  const [ socket, setSocket ] = useState(null)

  useEffect(() => {
    if (uid) {
      const sk = io(
        process.env.REACT_APP_BACKEND_URL,
        { query: { uid } }
      );
      setSocket(sk);
  
      return () => {
        sk.close(); 
      };
    }
  }, [ uid ]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
