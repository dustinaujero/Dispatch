import React from 'react';
import ChannelShow from './channel_show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    channel_id: ownProps.match.params.channelId
})
const mdp = dispatch=> ({

})

export default withRouter(connect(msp, null)(ChannelShow));