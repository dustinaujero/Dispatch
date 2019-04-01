import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import serverErrorsReducer from './errors/server_errors_reducer';
import channelErrorsReducer from './errors/channel_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    server: serverErrorsReducer,
    channel: channelErrorsReducer
});