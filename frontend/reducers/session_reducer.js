import {LOGIN_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

import { merge } from 'lodash';
const nullState = {
    user: null
};

const sessionReducer = (state = nullState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_CURRENT_USER: {
            return {user: action.user};
        }
        case LOGOUT_CURRENT_USER: {
            return nullState;
        }
        default: return state;
    }
}
export default sessionReducer;