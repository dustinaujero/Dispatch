import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ServerIndexContainer from '../servers/server_index_container';
import ServerModal from '../../components/servers/server_modal';
import ChannelModal from '../../components/channels/channel_modal_create';
import ChannelIndexContainer from '../channels/channel_index_container';
import Loading from '../ui/loading';
import UserProfile from '../../components/ui/user_profile';
import ServerHeader from '../servers/server_header';
import ChannelHeader from '../channels/channel_header';
import ChannelShow from '../channels/channel_show';


class Main extends React.Component {


    render() {
        return (
            <>
            {this.props.loading ? <Loading /> : <></>}
            <Route path="/channels/servers" component={ServerModal} />
            <Route path="/channels/channels/:serverId" component={ChannelModal} />
            <div className="main-page">


                <ServerIndexContainer />


                <div className="secondary"> 
                    <div className="secondary-header">
                        <Switch>
                            <Route exact path="/channels/@me" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route exact path="/channels/servers" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route exact path="/channels/channels/:serverId" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route path="/channels/:serverId/" component={ServerHeader}/>
                        </Switch>
                    </div>
                    <div className="secondary-main">
                        <Switch>
                                <Route exact path="/channels/@me" component={() => (
                                    <div className="channel-type">
                                        <div>
                                            <i className="fas fa-chevron-down fa-xs channelChev upright"></i>
                                        </div>
                                        <p>DIRECT MESSAGES</p>
                                        <div className="addChannelDIV">
                                            <svg className="addChannelSVG upright" width="18" height="18" viewBox="0 0 18 18"><polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                                        </div>
                                    </div>
                                )} />
                            <Route exact path="/channels/servers" component={() => (<div>server actions</div>)} />
                            <Route exact path="/channels/servers/:type" component={() => (<div>server tings</div>)} />
                            <Route exact path="/channels/channels/:serverId" component={() => (<div>creating channel</div>)} />
                            <Route path="/channels/:serverId" component={ChannelIndexContainer} />
                        </Switch>
                    </div>
                    <UserProfile />
                </div>


                <div className="third">
                    <div className="third-header">
                        <Switch>
                            <Route exact path="/channels/@me" component={() => (<div></div>)} />
                            <Route exact path="/channels/servers" component={() => (<div>server actions</div>)} />
                            <Route exact path="/channels/servers/:type" component={() => (<div>server tings</div>)} />
                            <Route exact path="/channels/channels/:serverId" component={() => (<div>creating channel</div>)} />
                            <Route exact path="/channels/:serverId" component={() => (<div>SELECT A CHANNEL</div>)} />
                            <Route path="/channels/:serverId/:channelId" component={ChannelHeader} />
                        </Switch>
                    </div>
                    <div className="third-body">
                        <div className="third-main">
                            <ChannelShow />
                        </div>
                        <div className="users-show">
                            <Switch>
                                <Route exact path="/channels/@me" component={() => (<div></div>)} />
                                <Route exact path="/channels/servers" component={() => (<div></div>)} />
                                <Route exact path="/channels/servers/:type" component={() => (<div>NOTHING</div>)} />
                                <Route exact path="/channels/channels/:serverId" component={() => (<div>NOTHING</div>)} />
                                <Route path="/channels/:serverId" component={() => (<div>USERS</div>)} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        );
    }
    
}

export default withRouter(Main);