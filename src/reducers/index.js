import { combineReducers } from 'redux';

import chat from './chat';
import item from './item';

const rootReducer = combineReducers({
  chat,
  item,
});

export default rootReducer;
