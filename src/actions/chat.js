import { SET_CHAT_MESSAGES } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const createChat = (uid1, uid2) => async dispatch => {
  try {
    const { data } = await api.createChat({ uid1, uid2 });
    console.log(data);
    dispatch({ type: SET_CHAT_MESSAGES, data: data });
  } catch (error) {
    console.log(error);
  }
}

export const getInbox = (uid) => async dispatch => {
  try {
    const { data } = await api.getChatInbox(uid);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
