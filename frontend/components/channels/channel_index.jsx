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

        const channels = this.props.currServerChannels.map(id => {
            return (this.props.channels[id]);
        });
        debugger
        return (
            <ul>
                <li>{channels}</li>
            </ul>
        );
    }
}

export default withRouter(ChannelIndex);