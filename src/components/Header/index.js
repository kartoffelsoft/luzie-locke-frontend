import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthProvider';
import HeaderDefaultView from './HeaderDefaultView';
import HeaderSearchView from './HeaderSearchView';

import styles from './index.module.scss';

function Header() {
  const [title, setTitle] = useState('Garage Sale');
  const [showSearch, setShowSearch] = useState(false);

  const { verifyAuth } = useAuth();
  const location = useLocation();

  useEffect(() => {
    verifyAuth();
  }, [location, verifyAuth]);

  useEffect(() => {
    switch (location.pathname.split('/')[1]) {
      case 'local':
        setTitle('My Local');
        break;

      case 'items':
        setTitle('My Garage');
        break;

      case 'chat':
        setTitle('Chats');
        break;

      case 'settings':
        setTitle('Settings');
        break;

      default:
        setTitle('Garage Sale');
        break;
    }
  }, [location]);

  const handleSearchOpen = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <>
      <div className={styles.placeHolder}></div>
      {!showSearch ? (
        <HeaderDefaultView title={title} onSearchClick={handleSearchOpen} />
      ) : (
        <HeaderSearchView onCloseClick={handleSearchClose} />
      )}

      {/* <div className={styles.menu}>
        <div className={styles.menuButton}>
          <Menu />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <div className={styles.logoImage} />
          </Link>
          <div className={styles.logoText}>{title}</div>
        </div>
        <div>
          <NotificationPanel />
        </div>
      </div> */}
    </>
  );
}

export default Header;
