import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { ItemList } from '../components/Item';
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
        <SearchBar />
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemAll;
