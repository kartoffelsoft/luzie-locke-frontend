import { combineReducers } from 'redux';

import auth from './auth';
import chat from './chat';
import item from './item';

const rootReducer = combineReducers({
  auth,
  chat,
  item
});

export default rootReducer; 
