import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItem } from '../actions/item';

import { ItemView } from '../components/Item';
import defaultImage from '../assets/images/box.svg';

const ItemDetail = props => {
  const { id } = useParams();
  const item = useSelector(state => state.item.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem(id));
  }, [id, dispatch]);

  if(item === null) {
    return <>
    </>
  }

  return (
    <>
      <ItemView 
        id={item._id}
        price={item.price}
        image={defaultImage} 
        title={item.title} 
        description={item.description}
        createdAt={item.createdAt}
        ownerId={item.owner._id}
        ownerName={item.owner.name}
        ownerImage={item.owner.pictureURI}
        ownerReputation={item.owner.reputation}
        ownerLocation={item.owner.location.name}
        counts={item.counts}
      />
    </>  
  );
}

export default ItemDetail;
  