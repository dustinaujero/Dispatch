import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerIndexContainer from '../servers/server_index_container';
import Loading from '../ui/loading';



class Main extends React.Component {

    render() {
        return (
            <>
            {this.props.loading ? <Loading /> : <></>}
            <div className="main-page">
                <ServerIndexContainer />
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
                    <Route path="/@me" component={() => <input type="text" />}/>
                    <div className="current-profile">

                    </div>
                
                </div>
                <div className="third">
                    <div>
                        iuniubibibobiubiubiuiboib
                    </div>
                    OIANDFONAFONADFIN
                </div>
                <div className="fourth">
                    ausd hasdfhiudsfhuisdafihuds
                </div>
                {/* <Switch>
                    <Route path="/channels/@me" component={() => (<div className="secondary"><h1> IN DMS</h1></div>)}/>
                    <Route path="/channels/:server" component={() => (<div className="secondary"><h1> IN SERVERS</h1></div>)} />
                </Switch> */}
            </div>
            </>
        );
    }
    
}

export default Main;