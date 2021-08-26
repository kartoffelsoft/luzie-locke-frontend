import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthProvider';
import { ProfilePicture } from '../../components-common';
import { FlatButton } from '../../components-common/button';
import MenuButton from './MenuButton';
import MenuList from './MenuList';
import SideDrawer from './SideDrawer';
import styles from './index.module.scss';
import icons from '../../assets/images/sprite.svg';

const Menu = () => {
  const history = useHistory();
  const { auth, logout } = useAuth();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const onDrawerClick = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const onUserClick = () => {
    setDrawerIsOpen(false);
    history.push('/location');
  };

  const onLogoutHandler = () => {
    logout();
    history.push('/');
  };

  const onMenuClick = () => {
    setDrawerIsOpen(false);
  };

  const renderSideDrawer = () => {
    switch (auth) {
      case null:
        return;

      default:
        return (
          <>
            <div className={styles.user} onClick={onUserClick}>
              <ProfilePicture
                src={auth.pictureURI}
                className={styles.userPhoto}
              />
              <div className={styles.userName}>Hello, {auth.name}!</div>
              {auth.location.name !== '' && (
                <div className={styles.userLocation}>
                  <svg className={styles.userLocationIcon}>
                    <use href={icons + '#icon-location-pin'}></use>
                  </svg>
                  <div className={styles.userLocationText}>
                    {auth.location.name}
                  </div>
                </div>
              )}
              {auth.location.name === '' && (
                <div className={styles.userSetLocation}>
                  <FlatButton>Set Location</FlatButton>
                </div>
              )}
            </div>

            <MenuList
              onMenuClick={onMenuClick}
              onLogoutHandler={onLogoutHandler}
            />
          </>
        );
    }
  };

  const renderButton = () => {
    switch (auth) {
      case null:
        return (
          <Link to="/login" className={styles.loginButton}>
            LOGIN
          </Link>
        );

      default:
        return <MenuButton onClick={onDrawerClick} open={drawerIsOpen} />;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <SideDrawer show={drawerIsOpen}>{renderSideDrawer()}</SideDrawer>

        {renderButton()}
      </div>
    </>
  );
};

export default Menu;
