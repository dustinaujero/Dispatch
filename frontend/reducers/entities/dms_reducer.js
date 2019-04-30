import { RECEIVE_DM_CHANNEL, RECEIVE_DM_CHANNELS, REMOVE_CHANNEL } from "../../actions/channel_actions";
import { merge } from 'lodash';

const dmChannelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DM_CHANNELS: {
            return merge({}, state, action.channels);
        }
        case RECEIVE_DM_CHANNEL: {
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

export default dmChannelsReducer;