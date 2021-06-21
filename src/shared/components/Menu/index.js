import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { LOGOUT } from '../../../store/actions/types';
import Button from '../Button';
import MenuButton from './MenuButton';
import MenuList from './MenuList';
import SideDrawer from './SideDrawer';
import styles from './index.module.scss';
import icons from '../../../assets/images/sprite.svg';

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const [ drawerIsOpen, setDrawerIsOpen ] = useState(false);

  const onDrawerClick = () => {
    if(!drawerIsOpen) {
      setUser(JSON.parse(localStorage.getItem('profile')));
    }

    setDrawerIsOpen(!drawerIsOpen);
  }

  const onUserClick = () => {
    setDrawerIsOpen(false);
    history.push('/location');
  }

  const onLogoutHandler = () => {
    dispatch({ type: LOGOUT });
    history.push('/');
    setUser(null);
  }

  const renderSideDrawer = () => {
    switch(user) {
      case null:
        return;
      
      default:
        return <>
          <div className={styles.user} onClick={onUserClick}>
            <img src={user.pictureURI} alt="" className={styles.userPhoto} />
            <div className={styles.userName}>
              Hello, {user.name}!
            </div>
            {
              user.location.name !== '' && 
              <div className={styles.userLocation}>
                <svg className={styles.userLocationIcon}>
                  <use href={icons + "#icon-location-pin"}></use>
                </svg>
                <div className={styles.userLocationText}>
                  {user.location.name}
                </div>
              </div>
            }
            {
              user.location.name === '' && 
              <div className={styles.userSetLocation}>
                <Button>Set Location</Button>
              </div>
            }
          </div>

          <MenuList onLogoutHandler={onLogoutHandler} />
        </>;
    }
  };

  const renderButton = () => {
    switch(user) {
      case null:
        return <Link to="/login" className={styles.loginButton}>LOGIN</Link>;

      default:
        return <MenuButton onClick={onDrawerClick} open={drawerIsOpen} />;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <SideDrawer show={drawerIsOpen}>
          {renderSideDrawer()}
        </SideDrawer>

        {renderButton()}
      </div>
    </>  
  );
}

export default Menu;
