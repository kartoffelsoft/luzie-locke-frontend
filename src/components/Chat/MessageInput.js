import { useState } from 'react';
import { FlatButton } from '../../components-common/button';

import icons from '../../assets/images/sprite.svg';
import styles from './MessageInput.module.scss';

const MessageInput = (props) => {
  const [message, setMessage] = useState('');

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (message !== '') {
      props.onSubmit(message);
      setMessage('');
    }
  };

  return (
    <>
      <form
        className={`${styles.container} ${props.className}`}
        onSubmit={onSubmit}
      >
        <input
          className={styles.input}
          value={message}
          placeholder="Type your message..."
          autoComplete="off"
          onChange={onInputChange}
        />
        <FlatButton className={styles.button} type="submit">
          <svg className={styles.icon}>
            <use href={icons + '#icon-paper-plane'}></use>
          </svg>
        </FlatButton>
      </form>
    </>
  );
};

export default MessageInput;
