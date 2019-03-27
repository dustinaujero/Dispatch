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
                    All-in-one voice and text chat for gamers that's free, secure, and 
                    works on both your desktop and phone. <br />Stop paying for TeamSpeak servers 
                    and hassling with Skype. Simplify your life.
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(Splash);