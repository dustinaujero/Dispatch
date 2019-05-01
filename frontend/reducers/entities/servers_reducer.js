import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../../actions/server_actions";
import { LOGIN_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SERVERS: {
            return action.payload.servers
        }
        case RECEIVE_SERVER: {
            const newServer = {[action.server.id]: action.server};
            return merge({}, state, newServer);
        }
        case REMOVE_SERVER: {
            const newState = merge({}, state);
            delete newState[action.serverId];
            return newState
        }
        case LOGIN_CURRENT_USER: {
            return merge({}, state, action.payload.servers);
        }
        default: return state;
    }

};

export default serversReducer;