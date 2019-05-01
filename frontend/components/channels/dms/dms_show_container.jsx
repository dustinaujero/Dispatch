import React from 'react';
import DMShow from './dms_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMessages } from '../../../actions/message_actions';

const msp = (state, ownProps) => {
    return (
    {
        channelMessages: state.entities.dms[ownProps.match.params.dmId].messages,
        allMessages: state.entities.messages,
        messages: Object.values(state.entities.messages),
        users: state.entities.users,
        currentUserId: state.session.user
    }
    )
}

const mdp = dispatch => ({
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId))
})

export default withRouter(connect(msp, mdp)(DMShow));