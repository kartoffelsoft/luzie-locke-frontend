import * as api from '../api/index.js';

export const ping = () => async dispatch => {
  try {
    console.log("ping...");
    const res = await api.ping();
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
