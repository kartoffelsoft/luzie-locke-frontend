import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItem } from '../../actions/item';

const ItemDetail = props => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("@" + id);
    dispatch(getItem(id));
  }, [id, dispatch]);

  return (
    <>
      ItemDetail {id}
    </>  
  );
}
  
export default ItemDetail;
  