import { useEffect, useState } from 'react';

import MessageInput from './MessageInput';
import MessageView from './MessageView';
import { useChat } from '../../contexts/ChatProvider';

import styles from './index.module.scss';

const Chat = props => {
  const [ chatId, setChatId ] = useState(null);
  const [ chatMessages, setChatMessages ] = useState([]);
  const uid = JSON.parse(localStorage.getItem('profile'))._id;
  const { sendMessage, createChat } = useChat();
  
  useEffect(() => {
    const f = async () => {
      const { id, messages } = await createChat({ uid, nid: props.nid });
      setChatId(id);
      setChatMessages(messages);
    };
    f();
  }, [ uid, props.nid, createChat, setChatId, setChatMessages ]);

  const onSubmit = (message) => {
    if (chatId) {
      sendMessage({ chatId, uid, nid: props.nid, message });
    }
  }

  return (
    <>
      <div className={`${styles.container} ${props.className}`}>
        <MessageView />
        <MessageInput onSubmit={onSubmit} />
      </div>
    </>  
  );
}

export default Chat;
  