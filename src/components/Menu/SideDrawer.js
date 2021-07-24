import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './SideDrawer.module.scss';

const SideDrawer = (props) => {
  const nodeRefBackground = React.useRef(null);
  const nodeRefContent = React.useRef(null);

  const content = (
    <>
      <CSSTransition
        nodeRef={nodeRefBackground}
        in={props.show}
        timeout={200}
        classNames={{
          enter: styles.slideEnter,
          enterActive: styles.slideEnterActive,
          exitActive: styles.slideExitActive,
          exitExit: styles.slideExit,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div ref={nodeRefBackground} className={styles.background}></div>
      </CSSTransition>

      <CSSTransition
        nodeRef={nodeRefContent}
        in={props.show}
        timeout={1000}
        classNames={{
          // enter: styles.showContentEnter,
          enterActive: styles.showContentEnterActive,
          exitActive: styles.showContentExitActive,
          // exitExit: styles.showContentEnter
        }}
        mountOnEnter
        unmountOnExit
      >
        <aside ref={nodeRefContent} className={styles.content}>
          {props.children}
        </aside>
      </CSSTransition>
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
