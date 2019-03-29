import { combineReducers } from 'redux';
import serversReducer from './entities/servers_reducer';

export default combineReducers({
    servers: serversReducer
});