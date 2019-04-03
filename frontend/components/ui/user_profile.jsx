import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = state => ({
    currentUser: state.session.user
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

class UserProfile extends React.Component{

    invert() {
        $("#root").toggleClass("invert");
        // $("#root").find("img").css("filter", "invert(1)");
        // $("#root").find("div").css("filter", "invert(1)");
        // $("#root").find("li").css("filter", "invert(1)");
        // $("#root").find("ul").css("filter", "invert(1)");
        // $("#root").find("aside").css("filter", "invert(1)");
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