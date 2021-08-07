import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGIN, LOGOUT } from '../../constants/actionTypes';
import { refreshToken } from '../../actions/auth';
import HeaderDefaultView from './HeaderDefaultView';
import HeaderSearchView from './HeaderSearchView';

import styles from './index.module.scss';

function Header() {
  const [title, setTitle] = useState('Garage Sale');
  const [showSearch, setShowSearch] = useState(false);

  const user = JSON.parse(localStorage.getItem('profile'));
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const access = JSON.parse(localStorage.getItem('accessToken'));
    const refresh = JSON.parse(localStorage.getItem('refreshToken'));

    if (access && refresh) {
      const decodedAccess = decode(access);
      dispatch({ type: LOGIN });

      if (decodedAccess.exp * 1000 < new Date().getTime() + 60 * 60 * 1000) {
        const decodedRefresh = decode(refresh);
        if (decodedRefresh.exp * 1000 < new Date().getTime()) {
          dispatch({ type: LOGOUT });
          history.push('/login');
        } else {
          dispatch(refreshToken(refresh, history));
        }
      }
    }
  }, [location, dispatch, history, user]);

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
