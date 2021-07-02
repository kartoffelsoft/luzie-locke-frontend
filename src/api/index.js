import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('accessToken')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`;
  }

  return req;
});

export const getItem = (id) => API.get(`/api/items/${id}`);

export const getItems = () => API.get('/api/items');

export const getMyItems = () => API.get('/api/items/my/');

export const createItem = (data) => API.post('/api/items/', data);

export const loginGoogle = (data) => API.post('/api/users/login/google', data);

export const refreshToken = (data) => API.post('/api/users/login/refresh', data);

export const updateLocation = (data) => API.patch('/api/users/location', data);

export const ping = () => API.get('/ping');
