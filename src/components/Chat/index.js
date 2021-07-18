import { useEffect, useState } from 'react';

import MessageInput from './MessageInput';
import MessageView from './MessageView';
import { useChat } from '../../contexts/ChatProvider';

import styles from './index.module.scss';

const Chat = props => {
  const [ profile, setProfile ] = useState(null);

  const { sendMessage, createChat, messages } = useChat();

  useEffect(() => {
    console.log("Create Chat")

    const f = async () => {
      const uid = JSON.parse(localStorage.getItem('profile'))._id;
      const { chatProfile } = await createChat({ uid, nid: props.nid });
      setProfile(chatProfile);
    };
    f();
  }, [ props.nid, createChat, setProfile ]);

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
  