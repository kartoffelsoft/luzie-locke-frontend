import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { FlatButton } from '../components-common/button';
import { PhotoUpload } from '../components-common/upload';
import { createItem } from '../actions/item';

import { storage } from '../firebase';

import styles from './ItemCreate.module.scss';

function ItemCreate() {
  const [photos, setPhotos] = useState([]);
  const [itemData, setItemData] = useState({
    title: '',
    price: 0,
    description: '',
    images: [],
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const upload = (photo) => {
    return new Promise((resolve, reject) => {
      const name = uuidv4();
      const task = storage.ref(`images/${name}`).putString(photo, 'data_url');

      task.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('images')
            .child(name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  };

  const onPhotoAdd = (photo) => {
    setPhotos([...photos, photo]);
  };

  const onPhotoDelete = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const promises = [];
    photos.forEach((photo) => promises.push(upload(photo)));

    Promise.all(promises).then((images) => {
      dispatch(createItem({ ...itemData, images: images }, history));
    });
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <div className={styles.formGroup}>
            <PhotoUpload
              photos={photos}
              onPhotoAdd={onPhotoAdd}
              onPhotoDelete={onPhotoDelete}
            />
            <input
              type="text"
              className={styles.formInput}
              placeholder="Title"
              id="title"
              required
              spellCheck="false"
              onChange={(e) =>
                setItemData({ ...itemData, title: e.target.value })
              }
            />
            <label htmlFor="title" className={styles.formLabel}>
              Title
            </label>
          </div>

          <div className={styles.formGroup}>
            <input
              type="number"
              step="0.01"
              min="0"
              className={styles.formInput}
              placeholder="Price"
              id="price"
              required
              spellCheck="false"
              onChange={(e) =>
                setItemData({ ...itemData, price: e.target.value })
              }
            />
            <label htmlFor="price" className={styles.formLabel}>
              Price
            </label>
          </div>

          <div className={styles.formGroup}>
            <textarea
              className={styles.formInput}
              placeholder="Description"
              id="description"
              required
              rows="7"
              spellCheck="false"
              onChange={(e) =>
                setItemData({ ...itemData, description: e.target.value })
              }
            />
            <label htmlFor="description" className={styles.formLabel}>
              Description
            </label>
          </div>

          <FlatButton className={styles.button} type="submit">
            REGISTER
          </FlatButton>
        </form>
      </div>
    </>
  );
}

export default ItemCreate;
