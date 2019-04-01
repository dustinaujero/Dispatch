import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchServers();
        this.props.clearLoading();
    }
    
    render() {
        const servers = this.props.servers.map(server => (
                        <li key={server.id}>
                            <img src={server.img_url} />
                            <div className="s-list-item-info">
                                {server.server_name}
                            </div>
                        </li>
                    ));
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

export default ServerIndex;