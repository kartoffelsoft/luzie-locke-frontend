import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGIN, LOGOUT } from '../../constants/actionTypes';
import { refreshToken } from '../../actions/auth';
import Menu from '../Menu';
import styles from './index.module.scss';

function Header() {
  const [ title, setTitle ] = useState('Garage Sale');
  const user = JSON.parse(localStorage.getItem('profile'));
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const access = JSON.parse(localStorage.getItem('accessToken'));
    const refresh  = JSON.parse(localStorage.getItem('refreshToken'));

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
  }, [ location, dispatch, history, user ]);

  useEffect(() => {
    switch(location.pathname.split('/')[1]) { 
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
  }, [ location ]);

  return (
    <>
      <div className={styles.placeHolder}></div>
      <div className={styles.menu}>
        <div className={styles.menuButton}>
          <Menu />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/"><div className={styles.logoImage} /></Link>
          <div className={styles.logoText}>
            {title}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
