import React from 'react';
import MessageForm from '../messages/message_form';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: this.props.messages
        }

        // this.bottom = React.createRef();
    }

    componentDidUpdate(prevProps) {
        // this.bottom.current.scrollIntoView();
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            debugger
            App.cable.subscriptions.subscriptions[0].unsubscribe();
            debugger
            App.cable.subscriptions.create(
                { channel: `RoomChannel`, channel_id: this.props.match.params.channelId },
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
            this.props.fetchMessages(this.props.match.params.channelId)

            .then((action) => {
                this.setState({
                    messages: Object.values(action.messages)
                });
            })
            
            ;
        }
    }
    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: `RoomChannel`, channel_id: this.props.match.params.channelId },
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
        this.props.fetchMessages(this.props.match.params.channelId)

        .then((action) => {
            this.setState({
                messages: Object.values(action.messages)
            });
        })

        ;
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