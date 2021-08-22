import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ItemList } from '../components/item';
import { getItems } from '../actions/item';

import styles from './ItemAll.module.scss';

const ItemAll = (props) => {
  const items = useSelector((state) => state.item.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      <div className={styles.itemAll}>
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemAll;
