import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.user),
});

const mdp = dispatch => ({
    loading: () => dispatch(loading())
});

const Auth = ({ component: Component, path, loggedIn, loading }) => {
    // loading();
    return (<Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/channels/@me" /> : <Component {...props} />
        )}
    />)
};

const Protected = ({ component: Component, path, loggedIn, loading }) => {
    // loading();
    return (<Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />)
};

export const AuthRoute = withRouter(connect(msp, mdp)(Auth));
export const ProtectedRoute = withRouter(connect(msp, mdp)(Protected));
