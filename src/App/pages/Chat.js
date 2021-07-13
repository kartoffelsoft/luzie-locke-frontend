import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createChat } from '../../actions/chat';

const Chat = props => {
  const { uid } = useParams();
  const messages = useSelector(state => state.chat.messsages);
  const dispatch = useDispatch();

  useEffect(() => {
    const myId = JSON.parse(localStorage.getItem('profile'))._id;
    console.log(myId);
    console.log(uid);
    dispatch(createChat(myId, uid));
  }, [ uid, dispatch ]);

  return (
    <>

    </>  
  );
}

export default Chat;
  