import { RECEIVE_CHANNEL_ERRORS, CLEAR_CHANNEL_ERRORS, RECEIVE_CHANNEL } from "../../actions/channel_actions";


const channelErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CHANNEL_ERRORS: {
            return [].concat(state).concat(action.errors);
        }
        case RECEIVE_CHANNEL: {
            return [];
        }
        case CLEAR_CHANNEL_ERRORS: {
            return [];
        }
        default: return state;
    }

};

export default channelErrorsReducer;