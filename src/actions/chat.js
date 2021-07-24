import { SET_INBOX } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getInbox = () => async (dispatch) => {
  try {
    const { data } = await api.getInbox();
    dispatch({ type: SET_INBOX, data: data });
  } catch (error) {
    console.log(error);
  }
};
