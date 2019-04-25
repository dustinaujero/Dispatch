import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;