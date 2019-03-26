import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/routes_util';
import SignupForm from '../components//session/signup_container'
import LoginForm from '../components/session/login_container';
//import containers

const App = () => (
    <div>

        <AuthRoute path="/signup" component={SignupForm} />
        <AuthRoute path="/login" component={LoginForm} />
    </div>
);
export default App;

