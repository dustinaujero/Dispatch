import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
                switch(e.target.value) {
                    case "@": {
                        this.setState({ input: e.target.value, type: "users" });
                        break;
                    } 
                    case "#": {
                        this.setState({ input: e.target.value, type: "channels" });
                        break;
                    }   
                    case "*": {
                        this.setState({ input: e.target.value, type: "servers" });
                        break;
                    }
                }
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
            // else {
            //     switch (this.state.type) {
            //         case "users": {

            //             break;
            //         }
            //         case "channels": {

            //             break;
            //         }
            //         case "servers": {

            //             break;
            //         }
            //     }
            // }
        }
    }
    handleSelect(data) {
        //data is object itself
        switch(this.state.type) {
            case "users": {

                break;
            }
            case "channels": {
                this.props.history.push(`/channels/${data.server_id}/${data.id}`)
                break;
            }
            case "servers": {
                this.props.history.push(`/channels/${data.id}/${this.props.servers[data.id].channels[0]}`);
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
                    <li key={user.id} onClick={() => this.handleSelect(user)}>
                        {user.username}
                    </li>
                ));
                break;
            }
            case "channels": {
                res = this.state.results.map(channel => (
                    <li key={channel.id} className="qs-channel-li" onClick={() => this.handleSelect(channel)}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path className="foreground-2W-aJk" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)"></path></svg>
                            {channel.channel_name}
                        </div> 
                        <div>
                            {this.props.servers[channel.server_id].server_name}
                        </div> 
                    </li>
                ));
                break;
            }
            case "servers": {
                res = this.state.results.map(server => (
                    <li key={server.id} onClick={() => this.handleSelect(server)}>
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

export default withRouter(connect(msp, mdp)(QuickSwitcher));