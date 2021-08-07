import { Link } from 'react-router-dom';
import styles from './ItemListElement.module.scss';

const ItemListElement = (props) => {
  return (
    <Link className={styles.container} to={'/items/' + props.id}>
      <div className={styles.image}>
        <img src={props.image} alt={''} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <h4 className={styles.location}>{props.location}</h4>
        <div className={styles.price}>
          <div className={styles.unit}>€</div>
          {props.price}
        </div>
      </div>
    </Link>
  );
};

export default ItemListElement;
