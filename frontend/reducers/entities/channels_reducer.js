import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from "../../actions/channel_actions";
import { LOGIN_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CHANNELS: {
            return merge({}, state, action.channels);
        }
        case RECEIVE_CHANNEL: {
            const newChannel = { [action.channel.id]: action.channel };
            return merge({}, state, newChannel);
        }
        case REMOVE_CHANNEL: {
            const newState = merge({}, state);
            delete newState[action.channelId];
            return newState;
        }
        case LOGIN_CURRENT_USER: {
            return merge({}, state, action.payload.channels);
        }
        default: return state;
    }

};

export default channelsReducer;