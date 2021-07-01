import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './MenuButton.module.scss';

const MenuButton = props => {
  const nodeRef = useRef(null);

  return (
    <>
      <div className={styles.button} onClick={props.onClick}>
        <CSSTransition 
          nodeRef = {nodeRef}
          in={props.open} 
          timeout={200} 
          classNames={{
            enter: styles.openEnter,
            enterActive: styles.openEnterActive,
            enterDone: styles.openEnterDone,
            exitActive: styles.openExitActive,
            exitExit: styles.openExit
          }}>
          <div ref={nodeRef} className={styles.buttonIcon}>&nbsp;</div>
        </CSSTransition>
      </div>
    </>  
  );
}

export default MenuButton;
