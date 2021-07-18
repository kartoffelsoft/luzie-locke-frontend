import { useParams } from 'react-router-dom';

import Chat from '../components/Chat';

// import styles from './ChatPage.module.scss';

const ChatPage = props => {
  const nid = useParams().nid;

  return (
    <>
      <Chat nid={nid} />
    </>  
  );
}

export default ChatPage;
  