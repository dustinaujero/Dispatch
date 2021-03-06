import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels, createChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { clearLoading } from '../../actions/ui_actions';
// const channels = state.entities.servers[ownProps.match.params.serverId].channels.map(id => state.entities.channels[id])
// state.entities.channels
const msp = (state, ownProps) => {

    return {
        currServer: state.entities.servers[ownProps.match.params.serverId],
        currServerChannels: state.entities.servers[ownProps.match.params.serverId].channels,
        channels: state.entities.channels
    };
    
};

const mdp = dispatch => ({
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    clearLoading: () => dispatch(clearLoading()),
    createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel))
});

export default withRouter(connect(msp, mdp)(ChannelIndex));