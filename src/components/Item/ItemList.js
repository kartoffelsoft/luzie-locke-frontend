import ItemListElement from './ItemListElement';

import defaultImage from '../../assets/images/box.svg';
import styles from './ItemList.module.scss';

const ItemList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        {/* <Card>
          <h2>No places found. Maybe create one?</h2>
          to="/places/new">Share Place</Button>
        </Card> */}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {props.items.map((item) => (
        <ItemListElement
          key={item._id}
          id={item._id}
          price={item.price}
          image={item.images[0] ? item.images[0] : defaultImage}
          title={item.title}
          location={item.owner.location.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ItemList;
