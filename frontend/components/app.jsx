import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import SignupForm from './session/signup_container';
import LoginForm from './session/login_container';
import Splash from './splash/splash';
import MainContainer from './main/main'

//import containers

const App = () => (
    <div className="app-div">
        <Route exact path="/" component={Splash} />

        <AuthRoute exact path="/signup" component={SignupForm} />
        <AuthRoute exact path="/login" component={LoginForm} />

        <ProtectedRoute path="/channels/" component={MainContainer} />
        {/* <ProtectedRoute path="/channels/:serverId/:chanelId" component={DMContainer} /> */}
    </div>
);
export default App;

