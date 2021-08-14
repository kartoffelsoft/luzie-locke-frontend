import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ItemList } from '../components/Item';
import CircleButton from '../components/CircleButton';
import { Tabs, TabPanel } from '../components-common/tabs';
import { getMyItems } from '../actions/item';

import styles from './ItemMy.module.scss';

function ItemMy() {
  const [activeTab, setActiveTab] = useState(1);
  const myItems = useSelector((state) => state.item.myList);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyItems());
  }, [dispatch]);

  const addButtonClickHandler = () => {
    history.push('/items/create');
  };

  const handleTabsChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className={styles.add}>
        <div className={styles.addButton}>
          <CircleButton onClick={addButtonClickHandler}>
            <div className={styles.addIcon} />
          </CircleButton>
        </div>
      </div>

      <Tabs selectedTab={activeTab} onChange={handleTabsChange}>
        <TabPanel title="ACTIVE">
          <ItemList items={myItems} />
        </TabPanel>
        <TabPanel title="SOLD">No sold items.</TabPanel>
      </Tabs>
    </>
  );
}

export default ItemMy;
