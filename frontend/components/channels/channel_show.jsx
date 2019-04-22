import React from 'react';
import MessageForm from '../messages/message_form';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: this.props.messages
        }

        // this.bottom = React.createRef();
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {

            App.cable.subscriptions.subscriptions[0].unsubscribe();

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
            
            // .then(() => this.scrollToBottom())

            ;

        }
    }
    scrollToBottom() {
        this.bottom.scrollIntoView({ behavior: "smooth" });
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

        // .then( () => this.scrollToBottom() )

        ;
    }
    render() {
        const messageList = this.state.messages.map((message, i) => {
            // if (i >= 1) {
            //     if (this.state.messages[i - 1].user_id === message.user_id) {
            //         return (
            //             <div className="follow-message">
            //                 {message.body}
            //             </div>
            //         )
            //     }
            // }
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
        return (
            <div className="chatroom-container">
                <div className="message-list">
                    {messageList}
                </div>
                <MessageForm />
            </div>
        );
    }
}

export default ChannelShow;