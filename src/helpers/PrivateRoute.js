import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, locationRequired, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          if (locationRequired && user.location.name === '') {
            return (
              <Redirect
                to={{ pathname: '/settings', state: { from: props.location } }}
              />
            );
          } else {
            return <Component {...props} />;
          }
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
