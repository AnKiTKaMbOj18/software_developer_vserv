import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'react-thunk';
import logger from 'redux-logger';
import mainReducer from './reducers/mainreducer';

export default createStore(
    combineReducers({ mainReducer }), {}, applyMiddleware(logger)
);