import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';


class Splash extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(formType){
        this.props.history.push(formType);
    }

    render() {
        return (
            <>
            <div className="splash-div">
            <header className="splash-header">
                <nav className="main-nav">
                    <div className="left-nav">
                        <div className="logo">
                            <img src={window.splashIcon}/>
                            <img src={window.logo}/>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/dustin-a-0aab33127/'target="_blank">LinkedIn</a> 
                        </div>
                        <div className="pg-div">
                            <a href='https://github.com/dustinaujero/Dispatch' target="_blank">Project Git</a>
                            <div className="splash-dropdwn">
                                <a href='https://github.com/dustinaujero/Dispatch/wiki' target="_blank">
                                Home
                                </a>
                                <hr/>
                                <a href='https://github.com/dustinaujero/Dispatch/wiki/State' target="_blank">
                                Redux State
                                </a>
                                <hr />
                                <a href='https://github.com/dustinaujero/Dispatch/wiki/Frontend-Routes' target="_blank">
                                Frontend Routes
                                </a>
                                <hr />
                                <a href='https://github.com/dustinaujero/Dispatch/wiki/Schema' target="_blank">
                                Database Schema
                                </a>
                                <hr />
                                <a href='https://github.com/dustinaujero/Dispatch/wiki/Backend-Routes' target="_blank">
                                Backend Routes
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className="right-nav">
                        <div><a href='https://github.com/dustinaujero' target="_blank"><i className="fab fa-github fa-lg"></i></a></div>
                        <div><a href='https://www.linkedin.com/in/dustin-a-0aab33127/' target="_blank"><i className="fab fa-linkedin-in fa-lg"></i></a></div>
                        <div>
                            <button onClick={() => this.handleClick("/login")} className="splash-login-button">
                                Login
                            </button>
                        </div>
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
            <div className="splash-buttons">
                    <button onClick={() => this.handleClick("/signup")}>New to the site?</button>
                    <button onClick={() => this.handleClick("/login")}>Come here often?</button>
            </div>
            <div className="splash-display">
                <img src={window.flask} id="flask" />
                <img src={window.mainComp} id="main-comp" />
                <img src={window.rightComp} id="right-comp" />
                <img src={window.headphones} id="headphones" />
                <img src={window.controller} id="controller" />
                <img src={window.leftPhone} id="left-phone" />
                <img src={window.rightPhone} id="right-phone" />
                <img src={window.cd} id="cd" />
                <img src={window.triangle} id="triangle" />
                <img src={window.coin} id="coin" />
                <img src={window.bomb} id="bomb" />
            </div>
            </div>
            </>
        );
    }
}

export default withRouter(Splash);