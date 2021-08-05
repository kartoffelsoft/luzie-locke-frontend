import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as api from '../api/index.js';
import { BasicSpinner } from '../components-common/spinner';
import { ItemView } from '../components/Item';

const ItemDetail = (props) => {
  const { pid } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const { data } = await api.getItem(pid);
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [pid]);

  if (item === null) {
    return <BasicSpinner />;
  }

  return (
    <>
      <ItemView
        id={item._id}
        price={item.price}
        images={item.images}
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
};

export default ItemDetail;
