import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FlatButton } from '../components-common/button';
import { PhotoUpload } from '../components-common/upload';
import { ErrorModal } from '../components-common/modal';
import { useBackendPostItem } from '../hooks/backend-post-item-hook';

import styles from './ItemCreate.module.scss';

function ItemCreate() {
  const [photos, setPhotos] = useState([]);
  const [itemData, setItemData] = useState({
    title: '',
    price: 0,
    description: '',
    images: [],
  });
  const { loading, error, clearError, done, post } = useBackendPostItem();

  const history = useHistory();

  useEffect(() => {
    if (done) {
      history.push('/items/garage');
    }
  }, [done, history]);

  const onPhotoAdd = (photo) => {
    setPhotos([...photos, photo]);
  };

  const onPhotoDelete = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    post({ ...itemData, images: photos });
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
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

          <FlatButton
            className={styles.button}
            type="submit"
            disabled={loading}
          >
            REGISTER
          </FlatButton>
        </form>
      </div>
    </>
  );
}

export default ItemCreate;
