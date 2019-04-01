import { RECEIVE_SERVER_ERRORS, CLEAR_SERVER_ERRORS, RECEIVE_SERVER } from "../../actions/server_actions";


const serverErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SERVER_ERRORS: {
            return [].concat(state).concat(action.errors);
        }
        case RECEIVE_SERVER: {
            return [];
        }
        case CLEAR_SERVER_ERRORS: {
            return [];
        }
        default: return state;
    }

};

export default serverErrorsReducer;