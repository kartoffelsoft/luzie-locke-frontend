import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MessageInput, MessageView } from '../components/chat';
import { useChat } from '../contexts/ChatProvider';

import styles from './Chat.module.scss';

const Chat = (props) => {
  const nid = useParams().nid;
  const [profile, setProfile] = useState(null);

  const { sendMessage, startChat, messages } = useChat();

  useEffect(() => {
    console.log('Create Chat');

    const f = async () => {
      const uid = JSON.parse(localStorage.getItem('profile'))._id;
      const { chatProfile } = await startChat({ uid, nid });
      setProfile(chatProfile);
    };
    f();
  }, [nid, startChat, setProfile]);

  const onSubmit = (message) => {
    if (profile) {
      sendMessage({
        chatId: profile.chatId,
        author: profile.uid._id,
        nid: profile.nid._id,
        body: message,
      });
    }
  };

  if (!profile) {
    return <div />;
  }

  return (
    <>
      <div className={`${styles.container} ${props.className}`}>
        <div className={styles.view}>
          <MessageView
            messages={messages}
            user={profile.uid}
            neighbor={profile.nid}
          />
        </div>
        <div className={styles.input}>
          <MessageInput onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default Chat;
