import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.serverId !== this.props.match.params.serverId)  {
            this.props.fetchChannels(this.props.match.params.serverId);
        }
    }
    componentDidMount() {
        this.props.fetchChannels(this.props.match.params.serverId);
    }

    render() {
        return (
            <ul>
                <li>idk</li>
            </ul>
        );
    }
}

export default withRouter(ChannelIndex);