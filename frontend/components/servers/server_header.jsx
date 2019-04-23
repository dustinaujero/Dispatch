import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    if (ownProps.match.params.serverId === "servers") {
        return {
            server: {server_name: " ", inv_code: " "}
        };
    }
    else {
        return {
            server: state.entities.servers[ownProps.match.params.serverId]
        };
    };
};


class ServerHeader extends React.Component {

    handleAddChannel() {
        $(".server-icon").toggleClass("upright rotate");
        $(".server-inv-code").toggleClass("code-show code-hide")
    }

    render() {
        return (
            <div className="server-header">
                <div>{this.props.server.server_name}</div>
                <div className="server-header-icon" onClick={this.handleAddChannel}><i className="fas fa-chevron-down fa-sm server-icon"></i>
                    <div className="server-inv-code code-hide">Invite code: 
                        <input type="text" defaultValue={this.props.server.inv_code}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(connect(msp, null)(ServerHeader));