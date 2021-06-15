import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth from './reducers/auth';

const rootReducer = combineReducers({
  auth: auth
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
