import { RECEIVE_SERVER } from "../../actions/server_actions";

const _nullState = {
    id: null
};

const currentServerReducer = (state = _nullState, action) => {

    switch(action.type) {

        case RECEIVE_SERVER: {
            return action.id;
        }
        default: return state;
    }
}

export default currentServerReducer;