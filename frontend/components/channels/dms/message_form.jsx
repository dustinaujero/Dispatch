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
        return e => {
            this.setState({ [field]: e.target.value });
            App.cable.subscriptions.subscriptions[0].typing(this.state);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak(this.state);
        this.setState({ body: "" });
    }
    handleKeyDown() {
        return e => {
            if (e.keyCode === 13) {
                this.handleSubmit(e);
            }
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.dmId !== this.props.match.params.dmId) {
            this.setState({
                body: "",
                channel_id: this.props.match.params.channelId
            });
        }
    }
    render() {
        const dm = this.props.channels[this.props.channelId];
        const otherUsers = dm.users.filter(id => id !== this.props.userId).map(id => this.props.users[id].username.split("#")[0]).join(", ");
        return (
            <div className="message-div">
                <form onKeyDown={this.handleKeyDown()} className="message-form">
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.handleUpdate("body")}
                        placeholder={`Message @${otherUsers}`}
                    />
                </form>
            </div>
        );
    }
}

const msp = (state, ownProps) => ({
    userId: state.session.user,
    channelId: ownProps.match.params.dmId,
    channels: state.entities.dms,
    users: state.entities.users,
})
const mdp = dispatch => ({

})
export default withRouter(connect(msp, null)(MessageForm));