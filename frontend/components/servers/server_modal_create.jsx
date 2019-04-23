import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
    serverErrors: state.errors.server
})

const mdp = dispatch => ({
    createServer: (server) => dispatch(createServer(server)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId))
})

class ServerModalCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server_name: "",
            img_url: "empty"
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // return (e) => {
        //     if (typeof e.target.classList[1] === "undefined") {
        //         this.props.history.push("/channels/@me");
        //     } else {
        //         this.props.history.push(`/channels/servers/${e.target.classList[1]}`);
        //     }
        // };
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
        this.props.createServer(this.state).then(
            ({server}) => this.props.fetchChannels(server.id).then((server) => {
                const sId = Object.values(server.channels)[0].server_id;
                const cId = Object.values(server.channels)[0].id;
                this.props.history.push(`/channels/${sId}/${cId}`);
            })
        );
    }
    render() {
        let error = "";
        if (this.props.serverErrors.length > 0) {
            error = " - Server name can't be blank"
        }
        return (
            <div className="loading" onClick={this.handleClick()}>
                <div className="server-alt-modal" >
                    <div className="server-modal-top">
                        <div>CREATE YOUR SERVER</div>
                        <div>By creating a server, you will have access to <strong>no</strong> voice and text chat to use amongst your friends</div>
                    </div>
                    <div className="server-modal-middle">
                        <div>
                            <div>SERVER NAME {error}</div> 

                            <input autoFocus={true} type="text" value={this.state.server_name} onChange={this.handleUpdate("server_name")} className="server-title server-name" />
                        </div>
                        <div>
                            <input type="radio" name="img" id="img" onClick={() => this.setState({ img_url: "empty" })}/>
                            <div>
                                <button>
                                    <div>
                                        <p>{this.state.server_name.split(" ").map(word => word.split("")[0]).slice(0, 4).join("")}</p>
                                    </div>
                                </button>
                                <div>NO IMG</div>
                            </div>
                            <input type="radio" name="img" id="img" onClick={() => this.setState({ img_url: "/assets/basic-discord-645038d22a7d96fb1d5c8e85bc78b7055b9bbb022c62a0258b76b3a8a03f060e.png"})}/>
                            <div>
                                <div>DEFAULT IMG</div>

                                <button>
                                    <img src={window.basicIcon} id="makeRed" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="server-modal-bottom">
                        <div>
                            <div onClick={() => this.props.history.goBack()}>BACK</div>
                            <button onClick={() => this.handleSubmit()}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(msp, mdp)(ServerModalCreate));