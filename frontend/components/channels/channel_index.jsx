import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {

    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);

        this.handleCollapseChannels = this.handleCollapseChannels.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.serverId !== this.props.match.params.serverId)  {
            this.props.fetchChannels(this.props.match.params.serverId);
        }
    }
    componentDidMount() {
        this.props.fetchChannels(this.props.match.params.serverId);
    }
    handleSelect(channelId) {
        this.props.history.push(`/channels/${this.props.currServer.id}/${channelId}`);
    }
    handleCollapseChannels() {
        $(".channel-index").toggleClass("show collapse");
        $(".channelChev").toggleClass("upright rotateTwo");
    }
    handleAddChannel() {
        $(".addChannelSVG").toggleClass("upright rotate");
    }
    render() {
        let chnls = [];
        if (this.props.channels[this.props.currServerChannels[0]]) {
            chnls = this.props.currServerChannels.map( id => (
                <li key={id} onClick={() => this.handleSelect(id)}><div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path className="foreground-2W-aJk" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)"></path></svg></div>
                    <div>{this.props.channels[id].channel_name}</div>
                </li>
            ));
        }
        return (
            <>
            <div className="channel-type">
                <div onClick={() => this.handleCollapseChannels()}>
                    <i className="fas fa-chevron-down fa-xs channelChev upright"></i>
                </div> 
                <p>TEXT CHANNELS</p> 
                <div onClick={() => this.handleAddChannel()} className="addChannelDIV">
                    <svg className="addChannelSVG upright" width="18" height="18" viewBox="0 0 18 18"><polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                </div>
            </div>
            <ul className="channel-index show">
                {chnls}
            </ul>
            </>
        );
    }
}

export default withRouter(ChannelIndex);