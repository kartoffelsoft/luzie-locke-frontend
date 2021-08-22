import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useBackendApi } from '../hooks/backend-api-hook';
import { ErrorModal } from '../components-common/modal';
import { ItemList } from '../components/item';
import CircleButton from '../components/CircleButton';
import { Tabs, TabPanel } from '../components-common/tabs';
import { BasicSpinner } from '../components-common/spinner';

import styles from './MyGarage.module.scss';

const MyGarage = () => {
  const [activeItems, setActiveItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const history = useHistory();

  const { loading, error, clearError, getGarageItems } = useBackendApi();

  useEffect(() => {
    console.log('Create Chat');

    const f = async () => {
      const items = await getGarageItems();
      setActiveItems(items.filter((item) => item.state === 'active'));
      setSoldItems(items.filter((item) => item.state === 'sold'));
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
            <ItemList items={activeItems} />
          </TabPanel>
          <TabPanel title="SOLD">
            <ItemList items={soldItems} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default MyGarage;
