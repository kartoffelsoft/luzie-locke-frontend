import React, { useContext, useEffect } from 'react'

import { useSocket } from './SocketProvider';
import * as api from '../api/index.js';

const ChatContext = React.createContext();

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on('receive-message', (o) => { console.log(o); })
      return () => socket.off('receive-message')
    }

  }, [ socket ])


  const sendMessage = ({ chatId, uid, nid, message }) => {
    if (socket) {
      console.log("Sending message...");
      socket.emit('send-message', { chatId, uid, nid, message });
    }
  }

  const createChat = async ({ uid, nid }) => {
    let res;
    try {
      res = await api.createChat({ uid, nid });
    } catch (error) {
      console.log(error);
      return { id: null, messages: [] };
    }

    return { id: res?.data?.chatId, messages: res?.data?.chatMessages };
  }

  const value = {
    // conversations: formattedConversations,
    // selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    // selectConversationIndex: setSelectedConversationIndex,
    createChat
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}
