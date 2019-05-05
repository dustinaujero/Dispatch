import React from 'react';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "@",
            results: [],
            type: "user_name"
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }
    handleUpdate() {
        return e => {
            //USERS
            if (this.state.input.split("")[0] === "@") {
                this.setState({input: e.target.value}, () => (
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
            else if (this.state.input.split("")[0] === "!") {

            }
        }
    }
    handleSelect() {

    }
    handleExit() {
        this.props.parent.setState({newDM: false});
    }
    render() {
        const res = this.state.results.map(user => (
            <li key={user.id}>
                {user.username}
            </li>
        ));
        return (
            // <div className="loading">
            <div className="modal-bg">
                <div>USER SEARCH</div>
                <input type="text" value={this.state.input} onChange={this.handleUpdate()} autoFocus/>
                {this.state.input.length === 0 ? 
                    <div>
                        <div>Don't know how to use the Quick Switcher?</div>
                        <ul>
                            <li>@ to search for users</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                :
                    <ul>
                        {res}
                    </ul>
                }
                
                <button className="hidden-button"></button>
                <button onClick={this.handleExit}>exit2</button>
            </div>
        )
    }
}
export default UserSearch;