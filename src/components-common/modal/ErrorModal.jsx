import Modal from './Modal';
import { FlatButton } from '../button';

import styles from './ErrorModal.module.scss';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={
        <FlatButton className={styles.button} onClick={props.onClear}>
          OK
        </FlatButton>
      }
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
