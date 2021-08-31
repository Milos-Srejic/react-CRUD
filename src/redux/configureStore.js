import { combineReducers, createStore } from 'redux';
import { userReducer } from './ducks/User';

const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(reducer);

export default store;
