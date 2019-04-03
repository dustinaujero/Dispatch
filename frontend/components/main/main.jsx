import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ServerIndexContainer from '../servers/server_index_container';
import ServerModal from '../../components/servers/server_modal';
import ChannelIndexContainer from '../channels/channel_index_container';
import Loading from '../ui/loading';
import UserProfile from '../../components/ui/user_profile';



class Main extends React.Component {


    render() {
        return (
            <>
            {this.props.loading ? <Loading /> : <></>}
            <Route exact path="/channels/servers" component={ServerModal} />
            <div className="main-page">

            
                <div className="primary">
                    <ServerIndexContainer />
                </div>


                <div className="secondary"> 
                    <div className="secondary-header">
                        <Switch>
                            <Route exact path="/channels/@me" component={() => 
                                <div className="search-div">
                                    <p>Find or start a conversation</p>
                                </div>  
                            }/>
                            <Route exact path="/channels/:serverId/" component={() => {
                                return (
                                    <>
                                    <p>Title</p> 
                                    <div><i className="fas fa-chevron-down"></i></div>
                                    </>
                                    )
                                }
                            }/>
                        </Switch>
                    </div>
                    <div className="secondary-main">
                        <Switch>
                            <Route path="/channels/@me" component={() => (<div>IN @ME</div>)} />
                            <Route path="/channels/:serverId/:channelId" component={ChannelIndexContainer} />
                        </Switch>
                    </div>
                    <UserProfile />
                </div>


                <div className="third">
                    <div>
                        DEBUGGER PLS
                    </div>
                    OIANDFONAFONADFIN
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