import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import ServerModalCreate from './server_modal_create';
import ServerModalJoin from './server_modal_join';


class ServerModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            server_name: "",
            img_url: "empty"
        }

        this.handleClick = this.handleClick.bind(this);
    }
                    // HOW TO GET History.LOCATION.PATHNAME
    handleClick() {                     
        return (e) => {
            if (typeof e.target.classList[1] === "undefined") {
                this.props.history.push("/channels/@me");
            } else {
                this.props.history.push(`/channels/servers/${e.target.classList[1]}`);
            }
        };
        // return (e) => {
        //     if (e.target === e.currentTarget) {

        //     }
        // }
    }
    // handleExit() {
    //     return (e) => {
    //         debugger
    //         if (e.target.classList[1] === "create" || e.target.classList[1] === "join") {

    //         } else {
    //             $(".loading").css("visibility", "hidden");
    //             this.props.history.goBack();
    //         }
    //     };
    // }
    render() {
        return (
            <Switch>
                <Route exact path="/channels/servers" component={() => 
                    <div className="loading" onClick={this.handleClick()}>
                        <div className="server-modal" >
                            <div className="saction-area">
                                <div className="saction-create create"onClick={this.handleClick("create")}>
                                    <button className="filler create">Create a server</button>
                                </div>
                                <div className="saction-join join" onClick={this.handleClick("join")}>
                                    <button className="filler join">Join a server</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }/>
                <Route exact path="/channels/servers/create" component={ServerModalCreate} />
                <Route exact path="/channels/servers/join" component={ServerModalJoin} />

            </Switch> 
        )
    }

}

export default withRouter(ServerModal);