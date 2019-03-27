import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions'
import SignupForm from './signup_form'

const msp = state => ({
    errors: state.errors.session
});

const mdp = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(msp,  mdp)(SignupForm);


