import { ReactElement } from 'react';

import styles from './TabPanel.module.scss';

interface Props {
  value: number;
  selectedIndex: number;
  children: [ReactElement];
}

const TabPanel: React.FC<Props> = ({ value, selectedIndex, children }) => {
  const hidden = value !== selectedIndex;
  return (
    <div className={`${styles.container} ${hidden ? styles.hidden : ''}`}>
      {children}
    </div>
  );
};

export default TabPanel;
