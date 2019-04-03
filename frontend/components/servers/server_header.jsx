import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    server: state.entities.servers[ownProps.match.params.serverId]
})


const ServerHeader = (props) => {

    return (
        <div className="server-header">
            <div>{props.server.server_name}</div>
            <div><i className="fas fa-chevron-down fa-sm"></i></div>
        </div>
    );
}

export default withRouter(connect(msp, null)(ServerHeader));