import { useState, useEffect } from 'react';
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

export const useBackendGetItems = (api, page, limit) => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let cancel;

    const f = async () => {
      try {
        const { data } = await API.get(
          `/api/items${api}?page=${page}&limit=${limit}`,
          {
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
          }
        );

        setItems((prev) => {
          const map = new Map();

          prev.forEach((item) => {
            map.set(item._id, item);
          });

          data.results.forEach((item) => {
            map.set(item._id, item);
          });

          return [...map.values()];
        });

        setHasMore(data.next);
        setLoading(false);
        return data;
      } catch (e) {
        if (axios.isCancel(e)) {
          return;
        }

        setError(e.message);
        setLoading(false);
        throw e;
      }
    };
    f();

    return () => cancel();
  }, [api, page, limit]);

  const clearError = () => {
    setError(null);
  };

  return {
    items,
    hasMore,
    loading,
    error,
    clearError,
  };
};
