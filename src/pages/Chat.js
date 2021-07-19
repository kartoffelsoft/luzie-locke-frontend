import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MessageInput, MessageView } from '../components/chat';
import { useChat } from '../contexts/ChatProvider';

import styles from './Chat.module.scss';

const Chat = props => {
  const nid = useParams().nid;
  const [ profile, setProfile ] = useState(null);

  const { sendMessage, createChat, messages } = useChat();

  useEffect(() => {
    console.log("Create Chat")

    const f = async () => {
      const uid = JSON.parse(localStorage.getItem('profile'))._id;
      const { chatProfile } = await createChat({ uid, nid });
      setProfile(chatProfile);
    };
    f();
  }, [ nid, createChat, setProfile ]);

  const onSubmit = (message) => {
    if (profile) {
      sendMessage({ 
        chatId: profile.chatId, 
        uid: profile.uid._id, 
        nid: profile.nid._id, 
        message 
      });
    }
  }

  if (!profile) {
    return (
      <div />
    )
  }

  return (
    <>
      <div className={`${styles.container} ${props.className}`}>
        <MessageView 
          messages={messages}
          user={profile.uid}
          neighbor={profile.nid}
        />
        <MessageInput onSubmit={onSubmit} />
      </div>
    </>  
  );
}

export default Chat;