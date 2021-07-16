import styles from './MessageView.module.scss';

const MessageView = props => {
  return (
    <>
      <div className={`${styles.container} ${props.className}`}>
        MessageView
      </div>
    </>
  );
}

export default MessageView;
