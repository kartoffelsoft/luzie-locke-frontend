import { ReactElement } from 'react';

import styles from './TabPanel.module.scss';

interface Props {
  className?: string;
  children: [ReactElement];
}

const TabPanel: React.FC<Props> = ({ className, children }) => {
  if (className) {
    console.log(className);
  }
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default TabPanel;
