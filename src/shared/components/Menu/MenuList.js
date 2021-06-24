import styles from './MenuList.module.scss';

const MenuList = (props) => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/chats">Chats</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/local">My Local</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/garage">My Garage</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/location">Settings</a>
          </li>
          <li className={styles.menuItem} onClick={props.onLogoutHandler}>
            <a className={styles.menuLink} href="/">Logout</a>
          </li>
        </ul>
      </div>
    </>  
  );
}

export default MenuList;
