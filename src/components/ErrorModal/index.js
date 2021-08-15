import Modal from '../Modal';
import { FlatButton } from '../../components-common/button';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<FlatButton onClick={props.onClear}>Okay</FlatButton>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
