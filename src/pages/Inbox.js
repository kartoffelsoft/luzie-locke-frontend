import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InboxElement } from '../components/chat';
import { getInbox } from '../actions/chat';
import styles from './Inbox.module.scss';

const Inbox = (props) => {
  const inbox = useSelector((state) => state.chat.inbox);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInbox());
  }, [dispatch]);

  console.log(inbox);
  return (
    <>
      <div className={styles.container}>
        {inbox.map((e, i) => {
          return (
            <InboxElement
              key={i}
              to={`/chat/${e.nid._id}`}
              src={e.nid.pictureURI}
              name={e.nid.name}
              lastMessage={e.lastMessage}
              unseen={e.counts.unseen}
              updatedAt={e.updatedAt}
            />
          );
        })}
      </div>
    </>
  );
};

export default Inbox;
