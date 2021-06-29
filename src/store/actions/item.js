import { SET_MY_ITEMS } from './types';
import * as api from '../../api/index.js';

export const getMyItems = () => async dispatch => {
  try {
    const { data } = await api.getMyItems();
    dispatch({ type: SET_MY_ITEMS, data: data.items });
  } catch (error) {
    console.log(error);
  }
}

export const createItem = (item, history) => async dispatch => {
  try {
    const { data } = await api.createItem(item);
    console.log(data);
    history.push('/garage');
  } catch (error) {
    console.log(error);
  }
}
