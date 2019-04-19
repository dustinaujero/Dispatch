import React from 'react';
import ChannelShow from './channel_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../actions/message_actions';

const msp = (state, ownProps) => (
    {
        channelMessages: state.entities.channels[ownProps.match.params.channelId].messages,
        allMessages: state.entities.messages,
        messages: Object.values(state.entities.messages)
    }
)
const mdp = dispatch=> ({
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
})

export default withRouter(connect(msp, mdp)(ChannelShow));