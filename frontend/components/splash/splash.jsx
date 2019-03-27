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
                <strong>Discord Logo</strong>
                {/* img with link to main */}
                <button onClick={this.handleClick} className="splash-login-button">Login</button>
            </header>
            <div className="splash-body">
                It's time to ditch Skype and TeamSpeak.
    All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
    
    
    
            </div>
            </>
        );
    }
}

export default withRouter(Splash);