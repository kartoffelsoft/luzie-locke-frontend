import styles from './MenuList.module.scss';

const MenuList = (props) => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink} href="/">My Garage</a>
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
