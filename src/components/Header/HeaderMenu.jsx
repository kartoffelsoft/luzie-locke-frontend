import Menu from '../Menu';
import styles from './HeaderMenu.module.scss';

const HeaderMenu = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default HeaderMenu;
