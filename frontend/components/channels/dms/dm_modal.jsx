import React from 'react';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            users: []
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleUpdate() {
        return e => {
            this.setState({username: e.target.value}, () => (
                $.ajax({
                    method: "GET",
                    url: "/api/users",
                    data: {username: this.state.username}
                }).then( users => {
                    this.setState({users: users});
                })
            ));
        }
    }
    handleSelect() {

    }
    render() {
        const users = this.state.users.map(user => (
            <li key={user.id}>
                {user.username}
            </li>
        ));
        return (
            <div className="">
                <div>USER SEARCH</div>
                <input type="text" value={this.state.username} onChange={this.handleUpdate()}/>
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}
export default UserSearch;