import { AUTH, SET_ACCESS_TOKEN, LOGOUT } from '../actions/types';

const authReducer = (state = null, action) => {
  switch(action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data?.profile }));
      localStorage.setItem('accessToken', JSON.stringify(action?.data?.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(action?.data?.refreshToken));
      return { ...state, ...action?.data };
  
    case SET_ACCESS_TOKEN: 
      localStorage.setItem('accessToken', JSON.stringify(action?.data?.accessToken));
      return null;

    case LOGOUT: 
      localStorage.clear();  
      return null;

    default:
      return state;
  }  
};

export default authReducer;