import React from 'react';
import { connect } from 'react-redux';

class QuickSwitcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "@",
            results: [],
            type: "users"
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleUpdate() {
        return e => {
            if (this.state.input.length === 0) {
                this.setState({input: e.target.value, type: "something"});
            }
            //USERS
            else if (this.state.input.split("")[0] === "@") {
                this.setState({input: e.target.value, type: "users"}, () => (
                    $.ajax({
                        method: "GET",
                        url: "/api/users",
                        data: { username: this.state.input.split("").slice(1).join("")}
                    }).then( users => {
                        this.setState({ results: users});
                    })
                ));
            }
            //CHANNELS
            else if (this.state.input.split("")[0] === "#") {
                this.setState({ input: e.target.value, type: "channels"}, () => (
                    $.ajax({
                        method: "GET",
                        url: "/api/channels/find",
                        data: { channel_name: this.state.input.split("").slice(1).join("") }
                    }).then( channels => {
                        this.setState({ results: channels });
                    })
                ));
            }
            //SERVERS
            else if (this.state.input.split("")[0] === "*") { 
                this.setState({ input: e.target.value, type: "servers" }, () => (
                    $.ajax({
                        method: "GET",
                        url: "/api/servers/find",
                        data: { server_name: this.state.input.split("").slice(1).join("") }
                    }).then( servers => {
                        this.setState({ results: servers });
                    })
                ));
            }
            else {
                this.setState({ input: e.target.value, type: "something" });
            }
        }
    }
    handleSelect(data) {
        switch(this.state.type) {
            case "users": {

                break;
            }
            case "channels": {

                break;
            }
            case "servers": {

                break;
            }
        }
    }
    handleExit() {
        this.props.parent.setState({newDM: false});
    }
    handleClick() {
        return(e) => {
            if (e.target === e.currentTarget) {
                this.handleExit();
            }
        }
    }
    render() {
        let res;
        switch (this.state.type) {
            case "users": {
                res = this.state.results.map(user => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ));
                break;
            }
            case "channels": {
                res = this.state.results.map(channel => (
                    <li key={channel.id}>
                        {channel.channel_name}
                    </li>
                ));
                break;
            }
            case "servers": {
                res = this.state.results.map(server => (
                    <li key={server.id}>
                        {server.server_name}
                    </li>
                ));
                break;
            }
        }
        
        return (
            <div className="modal-bg" onClick={this.handleClick()}>
                <div className="quick-switch">
                    <div>Search for servers, channels, or DMs</div>
                    <div>
                        <input type="text" value={this.state.input} onChange={this.handleUpdate()} autoFocus/>
                        {this.state.input.length === 0 ? 
                            <div>
                                <div>Don't know how to use the Quick Switcher?</div>
                                <ul>
                                    <li>@ to search for users</li>
                                    <li># to search for text channels (not yet working)</li>
                                    <li>* to search for servers (not yet working)</li>
                                </ul>
                            </div>
                        :
                            <>
                            <div>Searching all {this.state.type}</div>
                            <ul className="qs-results-ul">
                                {res}
                            </ul>
                            </>
                        }
                        <button className="hidden-button"></button>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = state => ({
    channels: state.entities.channels,
    servers: state.entities.servers
});
const mdp = dispatch => ({

});

export default connect(msp, mdp)(QuickSwitcher);