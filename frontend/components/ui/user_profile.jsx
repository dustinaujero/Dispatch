import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = state => ({
    currentUser: state.entities.users[state.session.user]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

class UserProfile extends React.Component{

    invert() {
        $("#root").toggleClass("invert");
    }

    render() {
        return (
            <div className="current-profile">
                <div>
                    <div className="image-div">
                        <img src={window.whiteFace}/>
                    </div>
                    <div className="u-info">
                        <div>{this.props.currentUser.username.split("#")[0]}</div>     
                        <div>{"#" + this.props.currentUser.username.split("#")[1]}</div>
                    </div>
                    <div className="icons">
                        <button onClick={() => this.invert()}><i className="fas fa-power-off fa-lg"></i></button>
                        <button onClick={() => this.props.logout()}><i className="fas fa-sign-out-alt fa-lg"></i></button> 
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(msp, mdp)(UserProfile);