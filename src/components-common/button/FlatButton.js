import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FlatButton.module.scss';

const FlatButton = (props) => {
  if (props.to) {
    return (
      <Link to={props.to} className={`${styles.button} ${props.className}`}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`${styles.button} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default FlatButton;
