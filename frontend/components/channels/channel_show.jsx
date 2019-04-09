import React from 'react';
import MessageForm from '../messages/message_form';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: []}
        // this.bottom = React.createRef();
    }

    componentDidUpdate() {
        // this.bottom.current.scrollIntoView();
    }
    componentDidMount() {
        App.cable.subscriptions.create(
            // { channel: `channel-${this.props.channel_id}` },
            { channel: `RoomChannel`, channel_id: 1 },
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data.message)
                    });
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );
    }
    render() {
        const messageList = this.state.messages.map(message => {
 
            return (
                <li key={message.id}>
                    {message.body}
                    <div ref={this.bottom} />
                </li>
            );
        });

        return (
            <div className="chatroom-container">
                <div>ChatRoom</div>
                <div className="message-list">
                    {messageList}
                </div>
                <MessageForm />
            </div>
        );
    }
}

export default ChannelShow;