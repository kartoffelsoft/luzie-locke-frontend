import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import { ItemList } from '../../components/Item';
import CircleButton from '../../components/CircleButton';
import { getMyItems } from '../../actions/item';

import styles from './ItemMy.module.scss';

function ItemMy() {
  const myItems = useSelector(state => state.item.myItems);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyItems());
  }, [ dispatch ]);
  
  const addButtonClickHandler = () => {
    history.push('/items/create');
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

export default ItemMy;
