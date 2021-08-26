import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { storage } from '../firebase';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('accessToken')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('accessToken')
    )}`;
  }

  return req;
});

export const useBackendPostItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const upload = useCallback((photo) => {
    return new Promise((resolve, reject) => {
      const name = uuidv4();
      const task = storage.ref(`images/${name}`).putString(photo, 'data_url');

      task.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('images')
            .child(name)
            .getDownloadURL()
            .then((url) => {
              resolve(url);
            });
        }
      );
    });
  }, []);

  const post = useCallback(
    async (inputs) => {
      setLoading(true);
      setError(null);
      setDone(false);

      const promises = [];
      inputs.images.forEach((photo) => promises.push(upload(photo)));

      Promise.all(promises).then(async (images) => {
        try {
          const { data } = await API.post('/api/items/', {
            ...inputs,
            images: images,
          });

          setDone(true);
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
      });
    },
    [upload]
  );

  const clearError = () => {
    setError(null);
  };

  return {
    loading,
    error,
    clearError,
    done,
    post,
  };
};
