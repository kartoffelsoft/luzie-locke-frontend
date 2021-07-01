import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGOUT } from '../../store/actions/types';
import { refreshToken } from '../../store/actions/auth';
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
      if (decodedAccess.exp * 1000 < new Date().getTime()) {
        const decodedRefresh = decode(refresh);
        if (decodedRefresh.exp * 1000 < new Date().getTime()) {
          dispatch({ type: LOGOUT });
          history.push('/login');
        } else {
          try {
            dispatch(refreshToken(refresh, history));
          } catch (error) {
            console.log(error);
          }
        }
      };
    }
  }, [ location, dispatch, history, user ]);

  useEffect(() => {
    switch(location.pathname) { 
      case '/local':
        setTitle('My Local');
        break;

      case '/garage':
      case '/garage/new':
        setTitle('My Garage');
        break;
      
      case '/chats':
        setTitle('Chats');
        break;

      case '/settings':
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
          <a href="/"><div className={styles.logoImage} /></a>
          <div className={styles.logoText}>
            {title}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
