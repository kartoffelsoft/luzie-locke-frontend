import Button from '../Button';
import icons from '../../assets/images/sprite.svg';
import styles from './ItemView.module.scss';

const ItemView = props => {
  return (
    <div className={styles.itemView}>
      <div className={styles.image}>
        <img src={props.image} alt={''} />
      </div>
      <div className={styles.owner}>
        <img src={props.ownerImage} alt={''} />
        <div className={styles.ownerTextContainer}>
          <div className={styles.ownerName}>
            {props.ownerName}
          </div>
          <div className={styles.ownerLocation}>
            {props.ownerLocation}
          </div>
        </div>
      </div>
      
      <div className={styles.title}>
        {props.title}
      </div>

      <div className={styles.description}>
        {props.description}
      </div>

      <div className={styles.count}>
        Chats 0 ∙ Favorites 0 ∙ Views {props.counts.view}
      </div>

      <div className={styles.action}>
        <svg className={styles.actionFavorite}>
          <use href={icons + "#icon-heart-outlined"}></use>
        </svg>
        <div className={styles.price}>
          <div className={styles.unit}>€ </div>{props.price}
        </div>
        <div className={styles.actionChat}>
          <Button>CHAT</Button>
        </div>
      </div>
    </div>
  );
}

export default ItemView;
