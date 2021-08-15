import { Link } from 'react-router-dom';
import icons from '../../assets/images/sprite.svg';
import styles from './MenuList.module.scss';

const MenuList = (props) => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + '#icon-home'}></use>
            </svg>
            <Link
              className={styles.menuLink}
              to="/items/garage"
              onClick={props.onMenuClick}
            >
              My Garage
            </Link>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + '#icon-flag'}></use>
            </svg>
            <Link
              className={styles.menuLink}
              to="/local"
              onClick={props.onMenuClick}
            >
              My Local
            </Link>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + '#icon-heart'}></use>
            </svg>
            <Link
              className={styles.menuLink}
              to="/favorites"
              onClick={props.onMenuClick}
            >
              Favorites
            </Link>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + '#icon-chat'}></use>
            </svg>
            <Link
              className={styles.menuLink}
              to="/chat"
              onClick={props.onMenuClick}
            >
              Chats
            </Link>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + '#icon-cog'}></use>
            </svg>
            <Link
              className={styles.menuLink}
              to="/settings"
              onClick={props.onMenuClick}
            >
              Settings
            </Link>
          </li>
          <li className={styles.menuItem} onClick={props.onLogoutHandler}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + '#icon-log-out'}></use>
            </svg>
            <Link
              className={styles.menuLink}
              to="/"
              onClick={props.onMenuClick}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuList;
