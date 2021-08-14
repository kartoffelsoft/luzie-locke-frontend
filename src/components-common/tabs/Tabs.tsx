import React, { ReactElement, useState } from 'react';
import styles from './Tabs.module.scss';

interface Props {
  children: [ReactElement];
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {children.map((elem, index) => {
          return (
            <div
              key={index}
              className={`${styles.tab} ${
                index === activeTab ? styles.active : ''
              }`}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </div>
          );
        })}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
