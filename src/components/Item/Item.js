import styles from './Item.module.scss';

const Item = props => {
  return (
    <div className={styles.item}>
      <a href={"/items/" + props.id}>
        <div className={styles.itemImage}>
          <img src={props.image} alt={''} />
        </div>
        <h3 className={styles.itemTitle}>
          {props.title}
        </h3>
        <div className={styles.itemBuy}>
          <h4 className={styles.itemBuyLocation}>
            {props.location}
          </h4>
          <div className={styles.itemBuyPrice}>
            <div className={styles.unit}>€</div>
            {props.price}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Item;
