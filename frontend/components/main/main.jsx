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
import ChannelShow from '../channels/channel_show_container';
import UsersIndex from '../users/users_index';
import DMsIndexContainer from '../channels/dms/dms_index_container';
import DMShow from '../channels/dms/dms_show_container';
import DMHeader from '../channels/dms/dms_header';
import Wumpus from '../ui/wumpus';
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
                            <Route path="/channels/@me/" component={() => <div className="search-div"><p>Find or start a conversation</p></div>} />
                            <Route path="/channels/@me/:dmId" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route exact path="/channels/servers" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route exact path="/channels/channels/:serverId" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route path="/channels/:serverId/:channelId" component={ServerHeader}/>
                        </Switch>
                    </div>
                    <div className="secondary-main">
                        <Switch>
                            <Route path="/channels/@me" component={DMsIndexContainer} />
                            <Route exact path="/channels/servers" component={() => (<div>server actions</div>)} />
                            <Route exact path="/channels/servers/:type" component={() => (<div>server tings</div>)} />
                            <Route exact path="/channels/channels/:serverId" component={() => (<div>creating channel</div>)} />
                            <Route path="/channels/:serverId/:channelId" component={ChannelIndexContainer} />
                        </Switch>
                    </div>
                    <UserProfile />
                </div>


                <div className="third">
                    <div className="third-header">
                        <Switch>
                            <Route exact path="/channels/@me/" component={() => (<div></div>)} />
                            <Route exact path="/channels/@me/:dmId" component={DMHeader} />
                            <Route exact path="/channels/servers" component={() => (<div>server actions</div>)} />
                            <Route exact path="/channels/servers/:type" component={() => (<div>server tings</div>)} />
                            <Route exact path="/channels/channels/:serverId" component={() => (<div>creating channel</div>)} />
                            <Route exact path="/channels/:serverId" component={() => (<div></div>)} />
                            <Route path="/channels/:serverId/:channelId" component={ChannelHeader} />
                        </Switch>
                    </div>
                    <div className="third-body">
                        <div className="third-main">
                            <Switch>
                                <Route exact path="/channels/@me" component={Wumpus} />
                                <Route path="/channels/@me/:dmId/" component={DMShow} />
                                <Route exact path="/channels/servers" component={Wumpus} />
                                <Route exact path="/channels/servers/:type" component={Wumpus} />
                                <Route exact path="/channels/channels/:serverId" component={Wumpus} />
                                <Route exact path="/channels/:serverId" component={Wumpus} />
                                <Route path="/channels/:serverId/:channelId" component={ChannelShow} />
                            </Switch>
                        </div>
                        <div className="users-show">
                            <Switch>
                                <Route path="/channels/@me/" component={() => (<div></div>)} />
                                <Route exact path="/channels/servers" component={() => (<div></div>)} />
                                <Route exact path="/channels/servers/:type" component={() => (<div>NOTHING</div>)} />
                                <Route exact path="/channels/channels/:serverId" component={() => (<div>NOTHING</div>)} />
                                <Route path="/channels/:serverId" component={UsersIndex} />
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