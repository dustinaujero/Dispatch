import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            user_id: this.props.userId,
            channel_id: this.props.channelId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak(this.state);
        this.setState({ body: "" });
    }
    handleKeyDown() {        
        return e => {
            if(e.keyCode === 13) {
                this.handleSubmit(e);
            }
        }
    }
    componentDidUpdate(prevProps){
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            this.setState({
                body: "",
                channel_id: this.props.match.params.channelId
            });
        }
    }
    render() {
        return (
            <div className="message-div">
                <form onKeyDown={this.handleKeyDown()} className="message-form">
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.handleUpdate("body")}
                        placeholder="Type message here"
                    />
                </form>
            </div>
        );
    }
}

const msp = (state, ownProps) => ({
    userId: state.session.user,
    channelId: ownProps.match.params.channelId
})
const mdp = dispatch => ({

})
export default withRouter(connect(msp, null)(MessageForm));