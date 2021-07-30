import { useEffect, useRef } from 'react';
import styles from './MessageView.module.scss';
import { ProfilePicture } from '../../components-common';

const MessageView = (props) => {
  const messagesEndRef = useRef();

  useEffect(() => {
    function handleResize() {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    }
    handleResize();
    window.visualViewport.addEventListener('resize', handleResize);

    // if (messagesEndRef.current) {
    //   messagesEndRef.current.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'end',
    //     inline: 'nearest',
    //   });
    // }
  });

  return (
    <>
      <div className={`${styles.container} ${props.className}`}>
        {props.messages.map((message, index) => {
          if (message.author === props.user._id) {
            return (
              <div className={styles.user} key={index}>
                <div className={styles.userMessage}>{message.body}</div>
                <div className={styles.clear} />
              </div>
            );
          }

          return (
            <div className={styles.neighbor} key={index}>
              <ProfilePicture
                className={styles.neighborPicture}
                src={props.neighbor.pictureURI}
                small
              />
              <div className={styles.neighborName}>{props.neighbor.name}</div>
              <div>
                <div className={styles.neighborMessage}>{message.body}</div>
                <div className={styles.clear} />
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default MessageView;
