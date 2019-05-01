import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMsIndex from './dms_index';
import { createDM, fetchDMs } from '../../../actions/channel_actions';

const msp = (state, ownProps) => ({
    dms: Object.values(state.entities.dms),
    users: state.entities.users,
    currentUser: state.session.user,
    currentDM: ownProps.match.params.dmId
})

const mdp = dispatch => ({
    fetchDMs: () => dispatch(fetchDMs()),
    createDM: (username) => dispatch(createDM(username))
})

export default withRouter(connect(msp, mdp)(DMsIndex));