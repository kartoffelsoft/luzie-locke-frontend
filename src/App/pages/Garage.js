import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { ItemList } from '../../shared/components/Item';
import CircleButton from '../../shared/components/CircleButton';
import { getMyItems } from '../../store/actions/item';

import styles from './Garage.module.scss';

function Garage() {
  const myItems = useSelector(state => state.item.myItems);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyItems());
  }, [ dispatch ]);
  
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

      <div className={styles.garage}>
        <ItemList items={myItems} />
      </div>
    </>
  );
}

export default Garage;
