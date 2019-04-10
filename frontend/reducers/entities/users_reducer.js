import { merge } from 'lodash';
import { LOGIN_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_SERVERS } from '../../actions/server_actions';


const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_CURRENT_USER: {  
            return merge({}, state, {[action.user.id]: action.user})
        }
        case LOGOUT_CURRENT_USER: {
            return {};
        }
        case RECEIVE_SERVERS: {
            return merge({}, state, action.payload.users)
        }
        default: return state;
    }
}
export default userReducer;