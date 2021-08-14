import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ItemList } from '../components/Item';
import CircleButton from '../components/CircleButton';
import { Tabs, Tab, TabPanel } from '../components-common/tabs';
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
        <Tab label="ACTIVE" value={1} />
        <Tab label="SOLD" value={2} />
      </Tabs>

      <TabPanel value={activeTab} selectedIndex={1}>
        <ItemList items={myItems} />
      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={2}>
        Hi2
      </TabPanel>
    </>
  );
}

export default ItemMy;
