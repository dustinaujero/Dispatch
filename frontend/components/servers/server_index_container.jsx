import React from 'react';
import ServerIndex from './server_index';
import { connect } from  'react-redux';
import { fetchServers, createServer } from '../../actions/server_actions';
import { clearLoading } from '../../actions/ui_actions';
import { fetchChannels } from '../../actions/channel_actions';

const msp = state => ({
    servers: Object.values(state.entities.servers)
})

const mdp = dispatch => ({
    fetchServers: () => dispatch(fetchServers()),
    clearLoading: () => dispatch(clearLoading()),
    createServer: (server) => dispatch(createServer(server)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
})

export default connect(msp, mdp)(ServerIndex);


