import { SET_CHAT_MESSAGES } from '../constants/actionTypes';

const initState = { chatId: null, chatMesssages: [] };

const chatReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_CHAT_MESSAGES:
      console.log(action.data)
      return { ...state, chatId: action.data.chatId, chatMessages: action.data.chatMessages };

    default:
      return state;
  }
};

export default chatReducer;
