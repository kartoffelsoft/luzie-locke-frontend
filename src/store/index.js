import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth from './reducers/auth';
import item from './reducers/item';

const rootReducer = combineReducers({
  auth,
  item,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
