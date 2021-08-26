import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MessageInput, MessageView } from '../components/chat';
import { BasicSpinner } from '../components-common/spinner';
import { useChat } from '../contexts/ChatProvider';
import { useAuth } from '../contexts/AuthProvider';

import styles from './Chat.module.scss';

const Chat = (props) => {
  const nid = useParams().nid;
  const [profile, setProfile] = useState(null);

  const { sendMessage, startChat, messages } = useChat();
  const { auth } = useAuth();

  useEffect(() => {
    const f = async () => {
      const uid = auth._id;
      const { chatProfile } = await startChat({ uid, nid });
      setProfile(chatProfile);
    };
    f();
  }, [nid, startChat, setProfile, auth]);

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
    return <BasicSpinner />;
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
