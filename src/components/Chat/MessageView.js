import styles from './MessageView.module.scss';
import { ProfilePicture } from '../../components-common';

const MessageView = (props) => {
  console.log(props.messages);

  return (
    <>
      <div className={`${styles.container} ${props.className}`}>
        {props.messages.map((message, index) => {
          if (message.uid === props.user._id) {
            return (
              <div className={styles.user} key={index}>
                <div className={styles.userMessage}>{message.message}</div>
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
                <div className={styles.neighborMessage}>{message.message}</div>
                <div className={styles.clear} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MessageView;
