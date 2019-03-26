import {LOGIN_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

import { merge } from 'lodash';
const nullState = {
    id: null
};

const sessionReducer = (state = nullState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_CURRENT_USER: {
            return {id: action.user.id};
        }
        case LOGOUT_CURRENT_USER: {
            return nullState;
        }
        default: return state
    }
}
export default sessionReducer;