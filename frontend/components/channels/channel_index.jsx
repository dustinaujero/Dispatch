import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.serverId !== this.props.match.params.serverId)  {
            this.props.fetchChannels(this.props.match.params.serverId);
        }
    }
    componentDidMount() {
        this.props.fetchChannels(this.props.match.params.serverId);
        this.props.clearLoading();
    }

    render() {
        return (
            <>
                <ul>
                    HELLO IM IN THE CHANNEL INDEX HEHEHEHEEHEHH
                </ul>
            </>
        );
    }
}

export default withRouter(ChannelIndex);