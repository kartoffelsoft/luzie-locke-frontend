import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInbox } from '../../actions/chat';

const Inbox = props => {
  const { uid2 } = useParams();
  // const messages = useSelector(state => state.chat.messsages);
  const dispatch = useDispatch();

  useEffect(() => {
    const uid = JSON.parse(localStorage.getItem('profile'))._id;
    console.log(uid);
  }, [ uid2, dispatch ]);

  return (
    <>

    </>  
  );
}

export default Inbox;
  