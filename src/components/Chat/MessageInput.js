import { useState } from 'react';
import Button from '../Button';

import icons from '../../assets/images/sprite.svg';
import styles from './MessageInput.module.scss';

const MessageInput = props => {
  const [ message, setMessage ] = useState('');

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  const onSendClick = () => {
    if (message !== '') {
      props.onSubmit(message)
      setMessage('');
    }
  };

  return (
    <>
      <div className={`${styles.container} ${props.className}`}>
        <input
          className={styles.input}
          value={message}
          placeholder="Type your message..."
          autoComplete="off"
          onChange={onInputChange}
        />
        <Button className={styles.button} onClick={onSendClick}>
          <svg className={styles.icon}>
            <use href={icons + "#icon-paper-plane"}></use>
          </svg>
        </Button>
      </div>
    </>
  );
}

export default MessageInput;
