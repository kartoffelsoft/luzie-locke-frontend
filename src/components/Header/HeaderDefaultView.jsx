import { Link } from 'react-router-dom';

import HeaderMenu from './HeaderMenu';

import icons from '../../assets/images/sprite.svg';
import styles from './HeaderDefaultView.module.scss';

const HeaderDefaultView = (props) => {
  return (
    <>
      <HeaderMenu />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <div className={styles.logoImage} />
          </Link>
          <div className={styles.logoText}>{props.title}</div>
        </div>
        <div className={styles.util}>
          <ul style={{ listStyle: 'none' }}>
            <li
              style={{ height: '3rem', width: '2rem' }}
              onClick={props.onSearchClick}
            >
              <svg className={styles.utilIcon}>
                <use href={icons + '#icon-magnifying-glass'}></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderDefaultView;
