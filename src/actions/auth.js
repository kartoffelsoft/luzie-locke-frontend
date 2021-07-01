import { AUTH, SET_ACCESS_TOKEN, SET_PROFILE, LOGOUT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const loginGoogle = (token, history) => async dispatch => {
  try {
    const res = await api.loginGoogle({ token });
    console.log(res);
    dispatch({ type: AUTH, data: res.data});
    history.push('/items/my');
  } catch (error) {
    console.log(error);
  }
}

export const refreshToken = (token, history) => async dispatch => {
  try {
    console.log('Refreshing token...');
    const res = await api.refreshToken({ token })
    console.log(res.data);
    if (res.data.success) {
      console.log('Token refreshed');
      dispatch({ type: SET_ACCESS_TOKEN, data: res.data});
    } else {
      console.log('Token refresh was unsuccessful.');
      dispatch({ type: LOGOUT });
      history.push('/login');
    }
  } catch (error) {
    console.log(error);
  }
}

export const updateLocation = (name, lat, lng, history) => async dispatch => {
  try {
    const res = await api.updateLocation({ name, lat, lng });
    dispatch({ type: SET_PROFILE, data: res.data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}
