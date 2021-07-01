import { SET_MY_ITEMS } from '../constants/actionTypes';

const initState = { myItems: [] };

const itemReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_MY_ITEMS:
      return { ...state, myItems: action.data };

    default:
      return state;
  }  
};

export default itemReducer;