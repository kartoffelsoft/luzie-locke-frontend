import { useEffect, useState, useRef, useCallback } from 'react';

import { ItemList } from '.';
import { ErrorModal } from '../../components-common/modal';
import { BasicSpinner } from '../../components-common/spinner';

import { useBackendItems } from '../../hooks/backend-items-hook';

import styles from './HotItems.module.scss';

const RecentItems = (props) => {
  const [page, setPage] = useState(1);

  const { items, hasMore, loading, error } = useBackendItems('', page);

  const observer = useRef();
  const lastRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('@@Visible');
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);

      console.log(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      <div className={styles.container}>
        <ItemList items={items} />
      </div>
      <div ref={lastRef}></div>
      {loading && <BasicSpinner />}
    </>
  );
};

export default RecentItems;
