import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL} from "../../actions/channel_actions";
import { merge } from 'lodash';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CHANNELS: {
            return action.channels
        }
        case RECEIVE_CHANNEL: {
            const newChannel = { [action.channel.id]: action.channel };
            return merge({}, state, newChannel);
        }
        case REMOVE_CHANNEL: {
            const newState = merge({}, state);
            delete newState[action.channelId];
            return newState
        }
        default: return state;
    }

};

export default channelsReducer;