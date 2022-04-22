import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { friends, chatRooms } from '../features/chat';

const reducer = combineReducers({
  friends, chatRooms
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
