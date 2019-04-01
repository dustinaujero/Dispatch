import { combineReducers } from 'redux';
import serversReducer from './entities/servers_reducer';
import channelsReducer from './entities/channels_reducer';

export default combineReducers({
    servers: serversReducer,
    channels: channelsReducer
});