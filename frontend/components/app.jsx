import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/routes_util';
import SignupForm from './session/signup_container';
import LoginForm from './session/login_container';
import Splash from './splash/splash';
//import containers

const App = () => (
    <div>
        <Route exact path="/" component={Splash} />
        <AuthRoute path="/signup" component={SignupForm} />
        <AuthRoute path="/login" component={LoginForm} />
    </div>
);
export default App;

