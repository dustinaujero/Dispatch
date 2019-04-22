import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    currServerUsers: state.entities.servers[ownProps.match.params.serverId].users,
    users: state.entities.users
})

class UsersIndex extends React.Component {


    render() {
        const users = this.props.currServerUsers.map( userId => {
            return (
                <li key={userId}>
                    <img src={window.whiteFace} />
                    <div>{this.props.users[userId].username.split("#")[0]}</div>
                </li>
            )
        })
        return (
            <>
            <div className="user-header">Users</div>
            <div className="user-main">
                <ul className="user-ul">
                    {users}
                </ul>
            </div>
            </>
        )
    }
}
export default withRouter(connect(msp, null)(UsersIndex));