import * as ServerAPIUtil from '../util/api_server_util';
import { Server } from 'http';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

export const receiveServers = (payload) => (
    {
        type: RECEIVE_SERVERS,
        payload
    }
)

export const receiveServer = (server) => (
    {
        type: RECEIVE_SERVER,
        server
    }
)

export const removeServer = (serverId) => (
    {
        type: REMOVE_SERVER,
        serverId
    }
)

export const receiveServerErrors = (errors) => (
    {
        type: RECEIVE_SERVER_ERRORS,
        errors
    }
)
export const clearServerErrors = () => (
    {
        type: CLEAR_SERVER_ERRORS,
    }
)

export const fetchServers = () => dispatch => (
    ServerAPIUtil.fetchServers().then(
        (payload) => dispatch(receiveServers(payload)),
        (errors) => dispatch(receiveServerErrors(errors.responseJSON))
    )
)

export const fetchServer = (id) => dispatch => (
    ServerAPIUtil.fetchServer(id).then(
        (server) => dispatch(receiveServer(server)),
        (errors) => dispatch(receiveServerErrors(errors.responseJSON))
    )
)

export const createServer = (server) => dispatch => (
    ServerAPIUtil.createServer(server).then(
        (server) => dispatch(receiveServer(server)),
        (errors) => dispatch(receiveServerErrors(errors.responseJSON))
    )
)

export const updateServer = (server) => dispatch => (
    ServerAPIUtil.updateServer(server).then(
        (server) => dispatch(receiveServer(server)),
        (errors) => dispatch(receiveServerErrors(errors.responseJSON))
    )
)

export const deleteServer = (id) => dispatch => (
    ServerAPIUtil.deleteServer(id).then(
        (id) => dispatch(removeServer(id)),
        (errors) => dispatch(receiveServerErrors(errors.responseJSON))
    )
)
export const joinServer = (invCode) => dispatch => (
    ServerAPIUtil.joinServer(invCode).then(
        (server) => dispatch(receiveServer(server)),
        (errors) => dispatch(receiveServerErrors(errors.responseJSON))
    )
)