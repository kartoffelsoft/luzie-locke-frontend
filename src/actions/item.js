import { SET_ITEMS, SET_MY_ITEMS } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getItem = (id) => async dispatch => {
  try {
    const { data } = await api.getItem(id);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export const getItems = () => async dispatch => {
  try {
    const { data } = await api.getItems();
    dispatch({ type: SET_ITEMS, data: data });
  } catch (error) {
    console.log(error);
  }
}

export const getMyItems = () => async dispatch => {
  try {
    const { data } = await api.getMyItems();
    dispatch({ type: SET_MY_ITEMS, data: data });
  } catch (error) {
    console.log(error);
  }
}

export const createItem = (item, history) => async dispatch => {
  try {
    const { data } = await api.createItem(item);
    console.log(data);
    history.push('/items/my');
  } catch (error) {
    console.log(error);
  }
}
