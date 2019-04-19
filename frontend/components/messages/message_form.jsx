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
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        App.cable.subscriptions.subscriptions[0].speak(this.state);
        this.setState({ body: "" });
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.handleUpdate("body")}
                        placeholder="Type message here"
                    />
                    <input type="submit" />
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