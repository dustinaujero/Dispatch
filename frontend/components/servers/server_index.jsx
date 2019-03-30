import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.servers = this.props.servers;
    }

    componentDidMount() {
        this.props.fetchServers();
    }

    render() {
        const servers = this.servers.map(server => (
                        <p>{server.img_url}</p>
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
                    {servers}
                </div>
            </aside>
        );
    }
}

export default ServerIndex;