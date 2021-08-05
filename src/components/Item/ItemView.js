import { FlatButton } from '../../components-common/button';
import { SwipeImageViewer } from '../../components-common/image-viewer';
import { getFromNowString } from '../../helpers/Date';
import icons from '../../assets/images/sprite.svg';
import styles from './ItemView.module.scss';
import defaultImage from '../../assets/images/box.svg';

const ItemView = (props) => {
  if (props.images.length === 0) {
    props.images[0] = defaultImage;
  }

  return (
    <div className={styles.itemView}>
      <SwipeImageViewer images={props.images} />
      <div className={styles.owner}>
        <img src={props.ownerImage} alt={''} />
        <div className={styles.ownerTextContainer}>
          <div className={styles.ownerName}>{props.ownerName}</div>
          <div className={styles.ownerLocation}>{props.ownerLocation}</div>
        </div>
      </div>

      <div className={styles.title}>{props.title}</div>

      <div className={styles.date}>{getFromNowString(props.createdAt)}</div>

      <div className={styles.description}>{props.description}</div>

      <div className={styles.count}>
        Chats 0 ∙ Favorites 0 ∙ Views {props.counts.view}
      </div>

      <div className={styles.action}>
        <svg className={styles.actionFavorite}>
          <use href={icons + '#icon-heart-outlined'}></use>
        </svg>
        <div className={styles.price}>
          <div className={styles.unit}>€ </div>
          {props.price}
        </div>
        <FlatButton
          className={styles.actionChatButton}
          to={`/chat/${props.ownerId}`}
        >
          CHAT
        </FlatButton>
      </div>
    </div>
  );
};

export default ItemView;
