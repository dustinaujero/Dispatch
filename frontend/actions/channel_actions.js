import * as ChannelAPIUtil from '../util/api_channel_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_DM_CHANNEL = "RECEIVE_DM_CHANNEL";
export const RECEIVE_DM_CHANNELS = "RECEIVE_DM_CHANNELS";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";

export const receiveChannels = (channels) => (
    {
        type: RECEIVE_CHANNELS,
        channels
    }
)
export const receiveChannel = (channel) => (
    {
        type: RECEIVE_CHANNEL,
        channel
    }
)
export const receiveDMChannel = (channel) => (
    {
        type: RECEIVE_DM_CHANNEL,
        channel
    }
)
export const receiveDMChannels = (channels) => (
    {
        type: RECEIVE_DM_CHANNELS,
        channels
    }
)
export const removeChannel = (channelId) => (
    {
        type: REMOVE_CHANNEL,
        channelId
    }
)
export const receiveChannelErrors = (errors) => (
    {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    }
)
export const clearChannelErrors = () => (
    {
        type: CLEAR_CHANNEL_ERRORS,
    }
)

export const fetchChannels = (serverId) => dispatch => (
    ChannelAPIUtil.fetchChannels(serverId).then(
        (channels) => dispatch(receiveChannels(channels)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON))
    )
)

export const fetchChannel = (id) => dispatch => (
    ChannelAPIUtil.fetchChannel(id).then(
        (channel) => dispatch(receiveChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON))
    )
)

export const createChannel = (serverId, channel) => dispatch => (
    ChannelAPIUtil.createChannel(serverId, channel).then(
        (channel) => dispatch(receiveChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON))
    )
)

export const updateChannel = (channel) => dispatch => (
    ChannelAPIUtil.updateChannel(channel).then(
        (channel) => dispatch(receiveChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON))
    )
)

export const deleteChannel = (id) => dispatch => (
    ChannelAPIUtil.deleteChannel(id).then(
        (id) => dispatch(removeChannel(id)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON))
    )
)

export const fetchDMs = () => dispatch => (
    ChannelAPIUtil.fetchDMs().then(
        (channels) => dispatch(receiveDMChannels(channels)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON))
    )
)

export const createDM = (username) => dispatch => (
    ChannelAPIUtil.createChannel(username).then(
        (channel) => dispatch(receiveDMChannel(channel)),
        (errors) => dispatch(receiveChannelErrors(errors.responseJSON))
    )
)
