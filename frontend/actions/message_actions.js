import * as MessageAPIUtil from '../util/api_message_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const CLEAR_MESSAGE_ERRORS = "CLEAR_MESSAGE_ERRORS";

export const receiveMessages = (messages) => (
    {
        type: RECEIVE_MESSAGES,
        messages
    }
)

export const receiveMessageErrors = (errors) => (
    {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    }
)

export const fetchMessages = (channelId) => dispatch => (
    MessageAPIUtil.fetchMessages(channelId).then(
        messages => dispatch(receiveMessages(messages)),
        errors => dispatch(receiveMessageErrors(errors))
    )
)