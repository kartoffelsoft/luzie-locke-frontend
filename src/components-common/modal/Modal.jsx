import ReactDOM from 'react-dom';

import Backdrop from '../helpers/Backdrop';
import styles from './Modal.module.scss';

const ModalOverlay = (props) => {
  const content = (
    <div className={`${styles.modal} ${props.className}`} style={props.style}>
      <header className={`${styles.modalHeader} ${props.headerClass}`}>
        <h2>{props.header}</h2>
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
  if (!!!props.show) {
    return <></>;
  }

  return (
    <>
      <Backdrop onClick={props.onCancel} />
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
