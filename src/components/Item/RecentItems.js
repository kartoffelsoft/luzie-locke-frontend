import { useEffect, useState } from 'react';

import { ItemList } from '.';
import { ErrorModal } from '../../components-common/modal';
import { BasicSpinner } from '../../components-common/spinner';

import { useBackendApi } from '../../hooks/backend-api-hook';

import styles from './HotItems.module.scss';

const RecentItems = (props) => {
  const [items, setItems] = useState([]);
  const { loading, error, clearError, getRecentItems } = useBackendApi();

  useEffect(() => {
    const f = async () => {
      const { results } = await getRecentItems({ page: 1, limit: 5 });
      console.log(results);
      setItems(results);
    };
    f();
  }, [getRecentItems]);

  if (loading) {
    return <BasicSpinner />;
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div className={styles.container}>
        <ItemList items={items} />
      </div>
    </>
  );
};

export default RecentItems;
