import { Link } from 'react-router-dom';

import icons from '../../assets/images/sprite.svg';
import styles from './NotificationPanel.module.scss';

const NotificationPanel = (props) => {
  return (
    <>
      <div className={styles.container}>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ height: '3rem', width: '3rem' }}>
            <Link to="/chat">
              <svg className={styles.chat}>
                <use href={icons + '#icon-chat'}></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NotificationPanel;
