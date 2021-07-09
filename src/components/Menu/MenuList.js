import icons from '../../assets/images/sprite.svg';
import styles from './MenuList.module.scss';

const MenuList = (props) => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + "#icon-home"}></use>
            </svg>
            <a className={styles.menuLink} href="/items/my">My Garage</a>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + "#icon-flag"}></use>
            </svg>
            <a className={styles.menuLink} href="/local">My Local</a>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + "#icon-heart"}></use>
            </svg>
            <a className={styles.menuLink} href="/favorites">Favorites</a>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + "#icon-chat"}></use>
            </svg>
            <a className={styles.menuLink} href="/chats">Chats</a>
          </li>
          <li className={styles.menuItem}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + "#icon-cog"}></use>
            </svg>
            <a className={styles.menuLink} href="/settings">Settings</a>
          </li>
          <li className={styles.menuItem} onClick={props.onLogoutHandler}>
            <svg className={styles.menuItemIcon}>
              <use href={icons + "#icon-log-out"}></use>
            </svg>
            <a className={styles.menuLink} href="/">Logout</a>
          </li>
        </ul>
      </div>
    </>  
  );
}

export default MenuList;
