import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';


class Splash extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(){
        this.props.history.push("/signup");
    }

    render() {
        return (
            <>
            <header className="splash-header">
                <nav className="main-nav">
                    <div className="left-nav">
                        <div>Discord Logo</div>
                        <div>Download</div>
                        <div>Nitro</div>
                        <div>Jobs</div>
                        <div>Developers</div>
                        <div>Community</div>
                        <div>Support</div>
                    </div>
                    <div className="right-nav">
                        <button onClick={this.handleClick} className="splash-login-button">Login</button>
                    </div>
                </nav>
            </header>
            <div className="splash-body">
                <h1>It's time to ditch Skype and TeamSpeak.</h1> 
                <div>
                    <p>All-in-one voice and text chat for gamers that's free, secure, and 
                    works on both your desktop and phone. </p>
                    <p>Stop paying for TeamSpeak servers 
                    and hassling with Skype. Simplify your life.</p>
                </div>
            </div>
            <div className="splash-display">
                <img src="assets/main-comp.svg" id="main-comp" />
                <img src="assets/right-comp.svg" id="right-comp" />
                <img src="assets/headphones.svg" id="headphones" />
                <img src="assets/controller.svg" id="controller" />
                <img src="assets/right-phone.svg" id="right-phone" />
                <img src="assets/left-phone.svg" id="left-phone" />
                <img src="assets/flask.svg" id="flask" />
            </div>
            </>
        );
    }
}

export default withRouter(Splash);