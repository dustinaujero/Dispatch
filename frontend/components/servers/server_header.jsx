import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    server: state.entities.servers[ownProps.match.params.serverId]
})


const ServerHeader = (props) => {

    return (
        <>
            {props.server.server_name}
        </>
    );
}

export default withRouter(connect(msp, null)(ServerHeader));