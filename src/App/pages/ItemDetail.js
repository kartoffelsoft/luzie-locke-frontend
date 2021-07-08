import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItem } from '../../actions/item';

import Button from '../../components/Button';
import icons from '../../assets/images/sprite.svg';
import styles from './ItemDetail.module.scss';

const ItemDetail = props => {
  const { id } = useParams();
  const item = useSelector(state => state.item.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem(id));
  }, [id, dispatch]);

  if(item === null) {
    return <></>
  }

  return (
    <>
      <div className={styles.actionContainer}>
        <svg className={styles.favorite}>
          <use href={icons + "#icon-heart-outlined"}></use>
        </svg>
        <div className={styles.price}>
          <div className={styles.unit}>€ </div>{item.price}
        </div>
        <div className={styles.chat}>
          <Button>CHAT</Button>
        </div>
      </div>
    </>  
  );
}
  
export default ItemDetail;
  