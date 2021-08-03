import { useRef, useState } from 'react';
import Resizer from 'react-image-file-resizer';

import styles from './PhotoUpload.module.scss';

const MAX_NUMBER_OF_PHOTO = 4;

const resizeFile = (file) => {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      'JPEG',
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      'base64'
    );
  });
};

const PhotoUpload = (props) => {
  const fileRef = useRef();

  const onAddClick = () => {
    fileRef.current.click();
    console.log('@');
  };

  const onDeleteClick = (e) => {
    props.onPhotoDelete(Number(e.target.id));
  };

  const onFileSelect = async (e) => {
    const file = e.target.files[0];
    e.currentTarget.value = null;
    if (file) {
      const photo = await resizeFile(file);
      props.onPhotoAdd(photo);
    }
  };

  return (
    <div className={styles.container}>
      {props.photos.map((photo, i) => {
        return (
          <div className={styles.photo}>
            <img className={styles.photoImage} src={photo} alt="" />
            <div
              className={styles.photoDelete}
              id={i}
              onClick={onDeleteClick}
            />
          </div>
        );
      })}

      {props.photos.length < MAX_NUMBER_OF_PHOTO ? (
        <>
          <div className={styles.add} onClick={onAddClick}>
            <div className={styles.addIcon} />
          </div>
          <input
            ref={fileRef}
            style={{ display: 'none' }}
            type="file"
            accept="image/*"
            onChange={onFileSelect}
          />
        </>
      ) : null}
    </div>
  );
};

export default PhotoUpload;
