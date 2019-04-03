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
        let chnls = [];
        if (this.props.channels[this.props.currServerChannels[0]]) {
            chnls = this.props.currServerChannels.map( id => { 
                return <li>{this.props.channels[id].channel_name}</li>
            });
        }
        return (
            <ul>
                {chnls}
            </ul>
        );
    }
}

export default withRouter(ChannelIndex);