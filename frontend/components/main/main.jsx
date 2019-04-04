import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ServerIndexContainer from '../servers/server_index_container';
import ServerModal from '../../components/servers/server_modal';
import ChannelIndexContainer from '../channels/channel_index_container';
import Loading from '../ui/loading';
import UserProfile from '../../components/ui/user_profile';
import ServerHeader from '../servers/server_header';
import ChannelHeader from '../channels/channel_header';



class Main extends React.Component {


    render() {
        return (
            <>
            {this.props.loading ? <Loading /> : <></>}
            <Route path="/channels/servers" component={ServerModal} />
            <div className="main-page">


                <ServerIndexContainer />


                <div className="secondary"> 
                    <div className="secondary-header">
                        <Switch>
                            <Route exact path="/channels/@me" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route exact path="/channels/servers" component={() => <div className="search-div"><p>Find or start a conversation</p></div>}/>
                            <Route path="/channels/:serverId/" component={ServerHeader}/>
                        </Switch>
                    </div>
                    <div className="secondary-main">
                        <Switch>
                            <Route exact path="/channels/@me" component={() => (<div>IN @ME</div>)} />
                            <Route exact path="/channels/servers" component={() => (<div>server actions</div>)} />
                            <Route exact path="/channels/servers/:type" component={() => (<div>server tings</div>)} />
                            <Route path="/channels/:serverId" component={ChannelIndexContainer} />
                        </Switch>
                    </div>
                    <UserProfile />
                </div>


                <div className="third">
                    <div className="third-header">
                        <Switch>
                            <Route exact path="/channels/@me" component={() => (<div>IN @ME</div>)} />
                            <Route exact path="/channels/servers" component={() => (<div>server actions</div>)} />
                            <Route exact path="/channels/servers/:type" component={() => (<div>server tings</div>)} />
                            <Route exact path="/channels/:serverId" component={() => (<div>NO SELECTED CHANNEL</div>)} />
                            <Route path="/channels/:serverId/:channelId" component={ChannelHeader} />
                        </Switch>
                    </div>
                </div>
                <div className="fourth">
                    ausd hasdfhiudsfhuisdafihuds
                </div>
            </div>
            
            </>
        );
    }
    
}

export default withRouter(Main);