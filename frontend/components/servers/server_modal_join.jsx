import React from 'react';
import { connect } from 'react-redux';
import { joinServer, fetchServers } from '../../actions/server_actions';
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
    serverErrors: state.errors.server
})

const mdp = dispatch => ({
    joinServer: (serverId, invCode) => dispatch(joinServer(serverId, invCode)),
    fetchServers: () => dispatch(fetchServers())
})

class ServerModalJoin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ""
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        return (e) => {
            if (e.target === e.currentTarget) {
                this.props.history.goBack();
            }
        }
    }
    handleUpdate(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    handleSubmit() {
        this.props.joinServer(this.state).then(
            ({ server }) => this.props.fetchChannels(server.id).then((server) => {
                const sId = Object.values(server.channels)[0].server_id;
                this.props.history.push(`/channels/${sId}`);
            })
        );
    }
    render() {
        let error = "";
        if (this.props.serverErrors.length > 0) {
            error = " - Invalid invite code"
        }
        return (
            <div className="loading" onClick={this.handleClick()}>
                <div className="server-alt-modal" >
                    <div className="server-join-top">JOIN A SERVER</div>
                    <div className="server-join-header">Enter an Instant Invite below to join an existing server. The invite will look something like this:</div>
                    <div className="server-join-body">https://discord.gg/qJq5C</div>
                    <form className="server-join-form" onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleUpdate("code")} value={this.state.code}/>
                        <label className={error ? "bad-label" : ""}>Enter an Instant Invite {error}</label>
                        <div>
                            <button>Join</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(msp, mdp)(ServerModalJoin));