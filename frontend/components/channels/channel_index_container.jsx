import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { clearLoading } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
    
    return {
        channels: state.entities.channels
    };
};

const mdp = dispatch => ({
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    clearLoading: () => dispatch(clearLoading())
});

export default withRouter(connect(msp, mdp)(ChannelIndex));