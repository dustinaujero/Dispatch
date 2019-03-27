import { RECEIVE_SESSION_ERRORS, LOGIN_CURRENT_USER, CLEAR_SESSION_ERRORS } from "../../actions/session_actions";


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS: {
            return [].concat(state).concat(action.errors);
        }
        case LOGIN_CURRENT_USER: {
            return [];
        }
        case CLEAR_SESSION_ERRORS: {
            return [];
        }
        default: return state;
    }

};

export default sessionErrorsReducer