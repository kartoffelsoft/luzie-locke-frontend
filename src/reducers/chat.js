import { SET_INBOX } from '../constants/actionTypes';

const initState = { inbox: [] };

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INBOX:
      return { ...state, inbox: action.data };

    default:
      return state;
  }
};

export default chatReducer;
