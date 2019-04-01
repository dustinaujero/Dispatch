import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ServerIndexContainer from '../servers/server_index_container';
import ChannelIndexContainer from '../channels/channel_index_container';
import Loading from '../ui/loading';



class Main extends React.Component {


    render() {
        return (
            <>
            {this.props.loading ? <Loading /> : <></>}
            <div className="main-page">
                <div className="primary">
                    <ServerIndexContainer />
                </div>
                <div className="secondary"> 
                    <div className="secondary-header">
                        <Switch>
                            <Route path="/channels/@me" component={() => 
                                <div className="search-div">
                                    <p>Find or start a conversation</p>
                                </div>  
                            }/>
                            <Route path="/channels/:serverId" component={() => {
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
                        <Route path="/channels/:serverId" component={ChannelIndexContainer} />
                    </div>

                    <Route path="/@me" component={() => <input type="text" />}/>
                    <div className="current-profile">
                        profile
                        <button onClick={this.props.logout}>logout</button>
                    </div>
                
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