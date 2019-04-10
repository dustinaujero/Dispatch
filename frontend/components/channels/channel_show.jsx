import React from 'react';
import MessageForm from '../messages/message_form';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: []}
        // this.bottom = React.createRef();
    }

    componentDidUpdate(prevProps) {
        // this.bottom.current.scrollIntoView();
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            App.cable.subscriptions.create(
                // { channel: `channel-${this.props.channel_id}` },
                { channel: `RoomChannel`, channel_id: this.props.match.params.channelId },
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
    }
    componentDidMount() {
        App.cable.subscriptions.create(
            // { channel: `channel-${this.props.channel_id}` },
            { channel: `RoomChannel`, channel_id: this.props.channel_id },
            {
                received: data => {
                    this.setState({
                        messages: this.state.messages.concat(data)
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