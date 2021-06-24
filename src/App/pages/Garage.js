import styles from './Garage.module.scss';
import CircleButton from '../../shared/components/CircleButton';

const addButtonClickHandler = () => {
  console.log("Add button pressed");
};

function Garage() {
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
