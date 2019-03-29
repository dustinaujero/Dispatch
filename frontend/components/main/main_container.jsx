import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Main from './main';

const msp = state => ({
    loading: state.ui.loading
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Main);