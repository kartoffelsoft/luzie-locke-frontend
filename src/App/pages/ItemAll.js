import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import { ItemList } from '../../components/Item';
import { getItems } from '../../actions/item';

import styles from './ItemMy.module.scss';

const ItemAll = props => {
  const items = useSelector(state => state.item.items);
  // const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [ dispatch ]);
  
  return (
    <>
      <div className={styles.itemAll}>
        <SearchBar />
        <ItemList items={items} />
      </div>
    </>
  );
}

export default ItemAll;
