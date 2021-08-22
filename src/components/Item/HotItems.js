import { useEffect, useState } from 'react';

import { ItemList } from '.';
import { useBackendApi } from '../../hooks/backend-api-hook';

import styles from './HotItems.module.scss';

const HotItems = (props) => {
  const [items, setItems] = useState([]);
  const { loading, error, clearError, getHotItems } = useBackendApi();

  useEffect(() => {
    console.log('Create Chat');

    const f = async () => {
      const { results } = await getHotItems({ page: 1, limit: 5 });
      console.log(results);
      setItems(results);
    };
    f();
  }, [getHotItems]);

  return (
    <div className={styles.container}>
      <ItemList items={items} />
    </div>
  );
};

export default HotItems;
