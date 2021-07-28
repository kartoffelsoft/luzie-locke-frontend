import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useSocket } from './SocketProvider';
import * as api from '../api/index.js';

const ChatContext = React.createContext();

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ path, children }) {
  const socket = useSocket();
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  useEffect(() => {
    if (socket) {
      socket.on('receive-message', ({ chatId, author, body, createdAt }) => {
        console.log({ chatId, author, body, createdAt });

        if (currentChatId === chatId) {
          setMessages((prev) => {
            return [...prev, { author, body, createdAt }];
          });
        }
      });
      return () => socket.off('receive-message');
    }
    // eslint-disable-next-line
  }, [socket, currentChatId]);

  useEffect(() => {
    if (!location.pathname.startsWith('/chat/')) {
      setCurrentChatId(null);
    }
  }, [location]);

  const sendMessage = ({ chatId, author, nid, body }) => {
    if (socket) {
      console.log('Sending message...');
      const createdAt = new Date();
      socket.emit('send-message', {
        chatId,
        author,
        nid,
        body,
        createdAt,
      });
      setMessages((prev) => {
        return [...prev, { author, body, createdAt }];
      });
    }
  };

  const startChat = useCallback(
    async ({ uid, nid }) => {
      let res;
      try {
        res = await api.startChat({ uid, nid });
      } catch (error) {
        console.log(error);
        return { chatProfile: null };
      }

      console.log(res);
      // setMessages(prev => {
      //   const r = prev.filter(c => c.chatId !== res.data.inbox.chatId);
      //   return [...r, { chatId: res.data.inbox.chatId, messages: res.data.messages }]
      // });
      setCurrentChatId(res.data.inbox.chatId);
      setMessages(res.data.messages);

      return { chatProfile: res.data.inbox };
    },
    [setMessages]
  );

  const value = {
    messages,
    sendMessage,
    startChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
