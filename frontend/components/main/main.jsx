import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})


const Main = (props) => {
    return (
        <>
        <h1>MainPage</h1>
        <button onClick={props.logout}>Logout</button>
        </>
    );
}

export default connect(null, mdp)(Main);