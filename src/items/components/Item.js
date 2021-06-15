import styles from './Item.module.scss';

const Item = props => {
  return (
    <div className={styles.item}>
      <div className={styles.itemImage}>
        <img src={props.image} alt={props.title} />
      </div>
      <h3 className={styles.itemTitle}>
        {props.title}
      </h3>
      <div className={styles.itemBuy}>
        <h4 className={styles.itemBuyLocation}>
          {props.location}
        </h4>
        <div className={styles.itemBuyPrice}>
          {props.price}
        </div>
      </div>
    </div>
  );
}

export default Item;
