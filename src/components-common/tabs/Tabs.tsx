import React, { ReactElement } from 'react';
import styles from './Tabs.module.scss';

interface Props {
  selectedTab: number;
  onChange: any;
  children: [ReactElement];
}

const Tabs: React.FC<Props> = ({ selectedTab, onChange, children }) => {
  const tabs = children.map((child: ReactElement) => {
    const handleClick = (e: React.MouseEventHandler<HTMLDivElement>) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return <div className={styles.container}>{tabs}</div>;
};

export default Tabs;
