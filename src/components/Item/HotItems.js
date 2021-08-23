import { useEffect, useState } from 'react';

import { ItemList } from '.';
import { ErrorModal } from '../../components-common/modal';
import { BasicSpinner } from '../../components-common/spinner';

import { useBackendApi } from '../../hooks/backend-api-hook';

import styles from './HotItems.module.scss';

const HotItems = (props) => {
  const [items, setItems] = useState([]);
  const { loading, error, clearError, getHotItems } = useBackendApi();

  useEffect(() => {
    const f = async () => {
      const { results } = await getHotItems({ page: 1, limit: 5 });
      console.log(results);
      setItems(results);
    };
    f();
  }, [getHotItems]);

  if (loading) {
    return <BasicSpinner />;
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div className={styles.container}>
        <ItemList items={items} autoFit />
      </div>
    </>
  );
};

export default HotItems;
