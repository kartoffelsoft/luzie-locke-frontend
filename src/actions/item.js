import { SET_ITEM_LIST, SET_ITEM_MY_LIST } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.getItems();
    dispatch({ type: SET_ITEM_LIST, data: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMyItems = () => async (dispatch) => {
  try {
    const { data } = await api.getMyItems();
    dispatch({ type: SET_ITEM_MY_LIST, data: data });
  } catch (error) {
    console.log(error);
  }
};

export const createItem = (item, history) => async (dispatch) => {
  try {
    const { data } = await api.createItem(item);
    console.log(data);
    history.push('/items/garage');
  } catch (error) {
    console.log(error);
  }
};
