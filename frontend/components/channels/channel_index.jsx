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

        const channels = this.props.channels.map(channel => {
            return (
                <li key={channel.id}>
                    {channel.channel_name}
                </li>
            );
        });
        return (
            <ul>
                <li>{this.props.currServerChannels}</li>
            </ul>
        );
    }
}

export default withRouter(ChannelIndex);