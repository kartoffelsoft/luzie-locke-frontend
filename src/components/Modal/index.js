import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from '../Backdrop';

import styles from './index.module.scss';

const ModalOverlay = (props) => {
  const content = (
    <div className={`${styles.modal} ${props.className}`} style={props.style}>
      <header className={`${styles.modalHeader} ${props.headerClass}`}>
        <h2>Props.header</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault
        }
      >
        <div className={`${styles.modalContent} ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`${styles.modalFooter} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  const nodeRef = React.useRef(null);
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        nodeRef={nodeRef}
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        className={styles.modal}
      >
        <div ref={nodeRef}>
          <ModalOverlay {...props} />
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
