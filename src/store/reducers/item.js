import { SET_MY_ITEMS } from '../actions/types';

const initState = { myItems: [] };

const itemReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_MY_ITEMS:
      return { ...state, myItems: action.data };
      //return { ...state, ...action?.data };

    default:
      return state;
  }  
};

export default itemReducer;