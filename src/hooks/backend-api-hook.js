import { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('accessToken')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('accessToken')
    )}`;
  }

  return req;
});

// const getItem = (pid) => API.get(`/api/items/${pid}`);

// const getItems = () => API.get('/api/items');

// const getMyItems = () => API.get('/api/items/garage/');

// const createItem = (data) => API.post('/api/items/', data);

// const loginGoogle = (data) => API.post('/api/users/login/google', data);

// const refreshToken = (data) => API.post('/api/users/login/refresh', data);

// const updateLocation = (data) => API.patch('/api/users/location', data);

// const getInbox = () => API.get(`/api/chat`);

// const startChat = (data) => API.post('/api/chat', data);

// const ping = () => API.get('/ping');

export const useBackendApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const activeRequests = useRef([]);

  const getGarageItems = useCallback(async () => {
    setLoading(true);

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    activeRequests.current.push(source);

    try {
      const { data } = await API.get('/api/items/garage/', {
        cancelToken: source.token,
      });

      activeRequests.current = activeRequests.current.filter(
        (request) => request !== source
      );

      setLoading(false);
      return data;
    } catch (e) {
      setError(e.message);
      setLoading(false);
      throw e;
    }
  }, []);

  const sendRequest = useCallback(async (query) => {
    setLoading(true);

    const source = axios.CancelToken.source();
    activeRequests.current.push(source);

    try {
      const { data } = await API.get(query, {
        cancelToken: source.token,
      });

      activeRequests.current = activeRequests.current.filter(
        (request) => request !== source
      );

      setLoading(false);
      return data;
    } catch (e) {
      setError(e.message);
      setLoading(false);
      throw e;
    }
  }, []);

  const getHotItems = useCallback(
    async ({ page = 1, limit = 20 }) => {
      return await sendRequest(`/api/items/hot?page=${page}&limit=${limit}`);
    },
    [sendRequest]
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeRequests.current.forEach((request) => request.cancel());
    };
  }, []);

  return { loading, error, clearError, getGarageItems, getHotItems };
};
