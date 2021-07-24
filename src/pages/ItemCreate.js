import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FlatButton } from '../components-common/button';
import { createItem } from '../actions/item';

import styles from './ItemCreate.module.scss';

function ItemCreate() {
  const [itemData, setItemData] = useState({
    title: '',
    price: 0,
    description: '',
    images: [],
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(createItem(itemData, history));
  };

  return (
    <>
      <div className={styles.new}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <div className={styles.formGroup}>
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
