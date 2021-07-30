import { SET_ITEM_LIST, SET_ITEM_MY_LIST } from '../constants/actionTypes';

const initState = { list: [], myList: [] };

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ITEM_LIST:
      return { ...state, list: action.data };

    case SET_ITEM_MY_LIST:
      return { ...state, myList: action.data };

    default:
      return state;
  }
};

export default itemReducer;
