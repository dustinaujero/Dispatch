import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';



class ServerModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 1
        }
    }

    handleClick() {
        return (e) => {
            if (e.target.classList[1] === "create" || e.target.classList[1] === "join") {
                this.props.history.push(`/channels/servers/${e.target.classList[1]}`);
            } else {
                $(".loading").css("visibility", "hidden");
                this.props.history.goBack();
            }
        }
    }


    

    render() {
        return (
            <div className="loading" onClick={this.handleClick("off")}>
                <Switch>
                    <Route exact path="/channels/servers" component={() => 
                        <div className="server-create-modal" >
                            <div className="saction-area">
                                <div className="saction-create create"onClick={this.handleClick("create")}>
                                    <button >Create a server</button>
                                </div>
                                <div className="saction-join join" onClick={this.handleClick("join")}>
                                    <button >Join a server</button>
                                </div>
                            </div>
                        </div>  
                    }/>
                    <Route exact path="/channels/servers/create" component={() => 
                        <div>JOIN</div>
                    } />
                    <Route exact path="/channels/servers/join" component={() => 
                        <div>JOIN</div>
                    } />
                </Switch>
            </div>
        )
    }

}

export default ServerModal;