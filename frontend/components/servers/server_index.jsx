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
    
    handleSelect(serverId) {
        this.props.history.push(`/channels/${serverId}`);
    }

    render() {
        const servers = this.props.servers.map(server => {
            if (server.img_url === 'empty') {
                return (
                    <li key={server.id}>
                        <img src={server.img_url} onClick={() => this.handleSelect(server.id)}/>
                        <div className="server-li-stick">
                            <div className="s-list-item-info">
                                {server.server_name}
                            </div>
                        </div>
                        
                    </li>
                )
            }
            else {

            }
        });
        return (
            <aside className="server-list">
                <div className="server-list-header">
                    <div>
                        <img src={window.whiteFace} id="first"/>
                        <img src={window.angryFace} id="sec"/>
                    </div>
                </div>
                <div className="server-list-main">
                    <ul className="server-list-items">
                        {servers}
                        <li>
                            <button>
                                <div>+</div>
                            </button>
                            <div className="s-list-item-info">
                                Add-Server
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default withRouter(ServerIndex);