import { combineReducers } from 'redux';
import serversReducer from './entities/servers_reducer';
import channelsReducer from './entities/channels_reducer';
import usersReducer from './entities/users_reducer';
import messagesReducer from './entities/messages_reducer';

export default combineReducers({
    servers: serversReducer,
    channels: channelsReducer,
    users: usersReducer,
    messages: messagesReducer
});