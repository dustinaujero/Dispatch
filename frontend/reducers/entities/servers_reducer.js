import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../../actions/server_actions";
import { merge } from 'lodash';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SERVERS: {
            return action.servers
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
        default: return state;
    }

};

export default serversReducer;