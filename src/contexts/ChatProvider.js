import React, { useContext, useEffect, useState, useCallback } from 'react';

import { useSocket } from './SocketProvider';
import * as api from '../api/index.js';

const ChatContext = React.createContext();

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  const socket = useSocket();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on('receive-message', ({ chatId, uid, nid, message }) => {
        console.log({ chatId, uid, nid, message });
        setMessages((prev) => {
          return [...prev, { uid, message }];
        });
      });
      return () => socket.off('receive-message');
    }
  }, [socket]);

  const sendMessage = ({ chatId, uid, nid, message }) => {
    if (socket) {
      console.log('Sending message...');
      socket.emit('send-message', { chatId, uid, nid, message });
      setMessages((prev) => {
        return [...prev, { uid, message }];
      });
    }
  };

  const createChat = useCallback(
    async ({ uid, nid }) => {
      let res;
      try {
        res = await api.createChat({ uid, nid });
      } catch (error) {
        console.log(error);
        return { chatProfile: null };
      }

      console.log(res);
      // setMessages(prev => {
      //   const r = prev.filter(c => c.chatId !== res.data.inbox.chatId);
      //   return [...r, { chatId: res.data.inbox.chatId, messages: res.data.messages }]
      // });
      setMessages(res.data.messages);

      return { chatProfile: res.data.inbox };
    },
    [setMessages]
  );

  const value = {
    messages,
    sendMessage,
    createChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
