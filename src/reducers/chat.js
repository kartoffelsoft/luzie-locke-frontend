import { SET_CHAT_MESSAGES } from '../constants/actionTypes';

const initState = { messsages: [] };

const chatReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_CHAT_MESSAGES:
      return { ...state, messages: action.data };
      
    default:
      return state;
  }
};

export default chatReducer;
