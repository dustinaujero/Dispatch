import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = state => ({
    currentUser: state.session.user
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

const UserProfile = (props) => {
    return (
        <div className="current-profile">
            <div>
                <div className="image-div">
                    <img src={window.whiteFace}/>
                </div>
                <div className="u-info">
                    <div>{props.currentUser.username.split("#")[0]}</div>     
                    <div>{"#" + props.currentUser.username.split("#")[1]}</div>
                </div>
                <div onClick={props.logout} className="logout">
                    <button onClick={() => this.invert()}><i class="fas fa-power-off"></i></button>
                    <button onClick={() => props.logout()}><i class="fas fa-sign-out-alt"></i></button> 
                </div>
            </div>
        </div>
    );
}

export default connect(msp, mdp)(UserProfile);