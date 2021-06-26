import { useHistory } from 'react-router-dom'
import CircleButton from '../../shared/components/CircleButton';

import styles from './Garage.module.scss';

function Garage() {
  const history = useHistory();

  const addButtonClickHandler = () => {
    history.push('/garage/new');
  };
  
  return (
    <>
      <div className={styles.add}>
        <div className={styles.addButton}>
          <CircleButton onClick={addButtonClickHandler}>
            <div className={styles.addIcon} />
          </CircleButton>
        </div>
      </div>
      Garage
    </>
  );
}

export default Garage;
