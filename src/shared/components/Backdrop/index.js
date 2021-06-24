import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.scss';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  )
}

export default Backdrop;