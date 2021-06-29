import Item from './Item';

import styles from './ItemList.module.scss';

const ItemList = props => {
  if(props.items.length === 0) {
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
              key={item._id} 
              id={item._id} 
              price={item.price}
              image={'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'} 
              title={item.title} 
              location={'Eschborn'} 
              description={item.description} />
        )
      }
    </div>
  );
}

export default ItemList;
