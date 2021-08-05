import { useState } from 'react';
import styles from './SwipeImageViewer.module.scss';

const SwipeImageViewer = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onImageClick = () => {
    setCurrentIndex((currentIndex + 1) % props.images.length);
  };

  return (
    <>
      <div className={styles.container}>
        {props.images.map((image, i) => {
          return (
            <div
              className={
                i === currentIndex
                  ? `${styles.slide} ${styles.active}`
                  : `${styles.slide}`
              }
              key={i}
              onClick={onImageClick}
            >
              <img
                className={
                  i === currentIndex ? `${styles.image}` : `${styles.invisible}`
                }
                key={image}
                src={image}
                alt=""
              />
            </div>
          );
        })}
        <div className={styles.bullet}>
          {props.images.map((dummy, i) => {
            return (
              <div
                className={
                  i === currentIndex
                    ? `${styles.bulletActive}`
                    : `${styles.bulletInactive}`
                }
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SwipeImageViewer;
