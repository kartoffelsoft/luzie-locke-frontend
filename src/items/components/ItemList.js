import Item from './Item';

import styles from './ItemList.module.scss';

const ItemList = props => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        {/* <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card> */}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {
        props.items.map(
          item => 
            <Item 
              key={item.id} 
              id={item.id} 
              price={item.price}
              image={item.image} 
              title={item.title} 
              location={item.location} 
              description={item.description} />
        )
      }
    </div>
  );
}

export default ItemList;
