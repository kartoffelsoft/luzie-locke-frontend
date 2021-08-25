import { Modal } from '../../components-common/modal';
import { FlatButton } from '../../components-common/button';

import styles from './DownloadModal.module.scss';

const DownloadModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="Notice"
      show={props.show}
      footer={
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <FlatButton className={styles.button} onClick={props.onClear}>
            OK
          </FlatButton>
        </div>
      }
    >
      <p>Sorry. Mobile Apps are not available now.</p>
    </Modal>
  );
};

export default DownloadModal;
