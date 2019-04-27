import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMsIndex from './dms_index';
import { createDM, fetchDMs } from '../../../actions/channel_actions';

const msp = state => ({
    channels: state.entities.channels,
    users: state.entities.users
})

const mdp = dispatch => ({
    fetchDMs: () => dispatch(fetchDMs),
    createDM: () => dispatch(createDM)
})

export default withRouter(connect(msp, mdp)(DMsIndex));