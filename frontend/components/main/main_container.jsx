import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearLoading } from '../../actions/ui_actions';
import Main from './main';

const msp = state => ({
    loading: state.ui.loading
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    clearLoading: () => dispatch(clearLoading())
})

export default connect(msp, mdp)(Main);