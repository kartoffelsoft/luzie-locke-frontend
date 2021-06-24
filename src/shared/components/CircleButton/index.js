import styles from './index.module.scss';

const CircleButton = props => {
  return (
    <>
      <div className={styles.button} onClick={props.onClick}>
        {props.children}
      </div>
    </>  
  );
}

export default CircleButton;
