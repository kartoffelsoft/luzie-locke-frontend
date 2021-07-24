import {
  AUTH,
  SET_ACCESS_TOKEN,
  SET_PROFILE,
  LOGIN,
  LOGOUT,
} from '../constants/actionTypes';

const initState = { authenticated: false };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify(action?.data?.profile));
      localStorage.setItem(
        'accessToken',
        JSON.stringify(action?.data?.accessToken)
      );
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(action?.data?.refreshToken)
      );
      return { ...state, authenticated: true };

    case SET_ACCESS_TOKEN:
      localStorage.setItem(
        'accessToken',
        JSON.stringify(action?.data?.accessToken)
      );
      return state;

    case SET_PROFILE:
      localStorage.setItem('profile', JSON.stringify(action?.data?.profile));
      return { ...state, ...action?.data };

    case LOGIN:
      return { ...state, authenticated: true };

    case LOGOUT:
      localStorage.clear();
      return initState;

    default:
      return state;
  }
};

export default authReducer;
