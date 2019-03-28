import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Main from './main';

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mdp)(Main);