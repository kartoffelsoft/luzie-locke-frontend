import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('accessToken')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`;
  }

  return req;
});

export const loginGoogle = (data) => API.post('/api/users/login/google', data);
export const refreshToken = (data) => API.post('/api/users/login/refresh', data);
export const ping = () => API.get('/ping');
