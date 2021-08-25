import { ItemList } from '.';
import { ErrorModal } from '../../components-common/modal';
import { BasicSpinner } from '../../components-common/spinner';

import { useBackendGetItems } from '../../hooks/backend-get-items-hook';

import styles from './BriefItemList.module.scss';

const BriefItemList = (props) => {
  const { items, loading, error, clearError } = useBackendGetItems(
    props.api,
    1,
    5
  );

  if (loading && items.length === 0) {
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

export default BriefItemList;
