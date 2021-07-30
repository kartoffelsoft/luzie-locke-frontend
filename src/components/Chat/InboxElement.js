// import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ProfilePicture } from '../../components-common';
import { getFromNowString } from '../../helpers/Date';
import styles from './InboxElement.module.scss';

const InboxElement = (props) => {
  return (
    <>
      <Link to={props.to} className={`${styles.inbox} ${props.className}`}>
        <ProfilePicture className={styles.inboxPicture} src={props.src} />
        <div className={styles.inboxName}>{props.name}</div>
        <div className={styles.inboxLastMessage}>{props.lastMessage}</div>
        <div className={styles.inboxTime}>
          {getFromNowString(props.updatedAt)}
        </div>
        {!!props.unseen && (
          <div className={styles.inboxUnseen}>
            <div className={styles.inboxUnseenText}>{props.unseen}</div>
          </div>
        )}
      </Link>
    </>
  );
};

export default InboxElement;
