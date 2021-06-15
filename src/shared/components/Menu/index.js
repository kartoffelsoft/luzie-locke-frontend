import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { LOGOUT } from '../../../store/actions/types';
import MenuButton from './MenuButton';
import MenuList from './MenuList';
import SideDrawer from './SideDrawer';
import styles from './index.module.scss';
import locationIcon from '../../../assets/images/sprite.svg';

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const [ drawerIsOpen, setDrawerIsOpen ] = useState(false);

  const onDrawerClick = () => {
    setDrawerIsOpen(!drawerIsOpen);
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
          <div className={styles.userLocation}>
            <svg className={styles.userLocationIcon}>
              <use href={locationIcon + "#icon-location-pin"}></use>
            </svg>
            <div className={styles.userLocationText}>
              Frankfurt
            </div>
          </div>

          <img src={user.pictureURI} alt="" className={styles.userPhoto} />
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
