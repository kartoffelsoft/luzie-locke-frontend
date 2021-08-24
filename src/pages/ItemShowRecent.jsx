import { RecentItems } from '../components/item';

import styles from './ItemShowRecent.module.scss';

const ItemShowRecent = (props) => {
  return (
    <>
      <div className={styles.container}>
        <RecentItems />
      </div>
    </>
  );
};

export default ItemShowRecent;
