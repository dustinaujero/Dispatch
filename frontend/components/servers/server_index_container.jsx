import React from 'react';
import ServerIndex from './server_index';
import { connect } from  'react-redux';
import {fetchServers} from '../../actions/server_actions';

const msp = state => ({
    servers: Object.values(state.entities.servers)
})

const mdp = dispatch => ({
    fetchServers: () => dispatch(fetchServers())
})

export default connect(msp, mdp)(ServerIndex);


