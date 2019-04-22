import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.props.fetchServers();
        this.props.clearLoading();
    }

    goHome() {
        this.props.history.push(`/channels/@me`);
    }
    handleSelect(server) {
        this.props.fetchChannels(server.id).then(() => {
            if (server.channels.length >= 1) {
                this.props.history.push(`/channels/${server.id}/${server.channels[0]}`);
            }
            else {
                this.props.history.push(`/channels/${server.id}/?`);
            }
        });
    }
    handleAddServer() {
        this.props.history.push(`/channels/servers`);
        $(".loading").css("visibility", "visible");
    }
    render() {
        const servers = this.props.servers.map(server => {
            if (server.img_url === 'empty') {
                return (
                    <li key={server.id} id={`serv${server.id}`}>
                        <input type="radio" name="something" onClick={() => this.handleSelect(server)}/>
                        <div className="no-img">
                            <p>{server.server_name.split(" ").map(word => {
                                    return word.split("")[0];
                                }).join("")
                            }</p>
                        </div>
                        <div className="server-li-stick">
                            <div className="s-list-item-info">
                                {server.server_name}
                            </div>
                            <div className="currServer">

                            </div>
                        </div>
                    </li>
                )
            }
            else {
                return (
                    <li key={server.id}>
                        <input type="radio" name="something" onClick={() => this.handleSelect(server)}/>
                        <img src={server.img_url} />
                        <div className="server-li-stick">
                            <div className="s-list-item-info">
                                {server.server_name}
                            </div>
                            <div className="currServer">

                            </div>
                        </div>
                    </li>
                )
            }
        });
        return (
            <div className="server-list">
                <div className="server-list-header">
                    <div onClick={() => this.goHome()}>
                        <img src={window.whiteFace} id="first"/>
                        <img src={window.angryFace} id="sec"/>
                    </div>
                </div>
                <div className="server-list-main">
                    <ul className="server-list-items">
                        {servers}
                        <li key={"-1"}>
                            <button onClick={() => this.handleAddServer()}>
                                <div>+</div>
                            </button>
                            <div className="s-list-item-info">
                                Add-Server
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(ServerIndex);