import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useBackendApi } from '../hooks/backend-api-hook';
import { ErrorModal } from '../components-common/modal';
import { ItemList } from '../components/Item';
import CircleButton from '../components/CircleButton';
import { Tabs, TabPanel } from '../components-common/tabs';
import { BasicSpinner } from '../components-common/spinner';

import styles from './MyGarage.module.scss';

function ItemMy() {
  const [myItems, setMyItems] = useState([]);
  const history = useHistory();

  const { loading, error, clearError, getGarageItems } = useBackendApi();

  useEffect(() => {
    console.log('Create Chat');

    const f = async () => {
      const res = await getGarageItems();
      setMyItems(res);
    };
    f();
  }, [getGarageItems]);

  const addButtonClickHandler = () => {
    history.push('/items/create');
  };

  if (loading) {
    return <BasicSpinner />;
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div className={styles.add}>
        <div className={styles.addButton}>
          <CircleButton onClick={addButtonClickHandler}>
            <div className={styles.addIcon} />
          </CircleButton>
        </div>
      </div>

      <div className={styles.container}>
        <Tabs>
          <TabPanel title="ACTIVE">
            <ItemList items={myItems} />
          </TabPanel>
          <TabPanel title="SOLD">No sold items.</TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default ItemMy;
