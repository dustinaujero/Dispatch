import React from 'react';

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: "",
            user_id: 1,
            channel_id: 1
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak(this.state);
        this.setState({ body: "" });
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
export default MessageForm;