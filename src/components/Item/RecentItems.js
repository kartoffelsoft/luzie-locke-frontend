import { useState, useRef, useCallback } from 'react';

import { ItemList } from '.';
import { ErrorModal } from '../../components-common/modal';
import { BasicSpinner } from '../../components-common/spinner';

import { useBackendGetItems } from '../../hooks/backend-get-items-hook';

import styles from './RecentItems.module.scss';

const RecentItems = (props) => {
  const [page, setPage] = useState(1);

  const { items, hasMore, loading, error, clearError } = useBackendGetItems(
    '',
    page,
    10
  );

  const observer = useRef();
  const lastRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  if (loading && items.length === 0) {
    return <BasicSpinner />;
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div className={styles.container}>
        <ItemList items={items} />
      </div>
      <div ref={lastRef}></div>
      {loading && <BasicSpinner />}
    </>
  );
};

export default RecentItems;
