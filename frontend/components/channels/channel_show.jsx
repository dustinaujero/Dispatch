import React from 'react';
import MessageForm from '../messages/message_form';
import { runInThisContext } from 'vm';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: this.props.messages,
            typing: {typing: false}
        }

        // this.bottom = React.createRef();
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.setupNewRoom = this.setupNewRoom.bind(this);
        this.timer = null;
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            App.cable.subscriptions.subscriptions[0].unsubscribe();
            this.setupNewRoom();
        }
    }
    scrollToBottom() {
        this.bottom.scrollIntoView(false);
    }
    setupNewRoom() {
        App.cable.subscriptions.create(
            { channel: `RoomChannel`, channel_id: this.props.match.params.channelId },
            {
                received: data => {
                    if (data.type === "msg") {
                        this.setState({
                            messages: this.state.messages.concat(data)
                        });
                        this.scrollToBottom();
                    }
                    else {
                        this.setState({
                            typing: data
                        }, () => {
                            if (this.timer) {
                                clearTimeout(this.timer);
                            }
                            this.timer = setTimeout(() => {
                                this.setState({ typing: { typing: false }});
                                this.timer = null;
                            }, 3000
                            );
                            
                        });
                    }
                },
                speak: function (data) {
                    return this.perform("speak", data);
                },
                typing: function (data) {
                    return this.perform("typing", data);
                }
            }

        );
        this.props.fetchMessages(this.props.match.params.channelId)
        .then((action) => {
            this.setState({
                messages: Object.values(action.messages)
            });
            return Object.values(action.messages);
        })
        .then((messages) => {
            if (messages.length >= 1) {
                this.scrollToBottom()
            }
        });
    }
    componentDidMount() {
        this.setupNewRoom();
    }
    render() {
        const messageList = this.state.messages.map((message, i) => {
            if (i >= 1) {
                if (this.state.messages[i - 1].user_id === message.user_id) {
                    return (
                        <li key={message.id} className="follow-message">
                            {message.body}
                            <div ref={(el) => this.bottom = el} />
                        </li>
                    )
                }
            }
            return (
                <li key={message.id} className="message">
                    {/* <img src="" alt=""/> */}
                    {/* <div className="message-image"> */}
                    <img src={window.whiteFace} />
                    {/* </div> */}
                    <div className="message-info">
                        <div className="user-info">
                            <div>{this.props.users[message.user_id].username.split("#")[0]}</div>
                            <div>{message.created_at}</div>
                        </div>
                        <div>
                            {message.body}
                        </div>

                    </div>

                    <div ref={(el) => this.bottom = el} />
                </li>
            );
        });
        if (this.state.typing.typing && this.state.typing.user_id !== this.props.currentUserId) {
            return (
                <>
                <div className="chatroom-container">
                    <div className="message-list">
                        {messageList}
                    </div>
                </div>
                <div className="active-typing">
                    {this.props.users[this.state.typing.user_id].username.split("#")[0]} is typing...
                </div>
                </>
            );
        }
        else {
            return (

                <div className="chatroom-container">
                    <div className="message-list">
                        {messageList}
                    </div>
                </div>
            );
        }
    }
}

export default ChannelShow;