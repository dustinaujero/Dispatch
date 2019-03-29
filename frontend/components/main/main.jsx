import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerIndexContainer from '../servers/server_index_container';
import { inspect } from 'util';


class Main extends React.Component {

    render() {
        return (
            <div className="main-page">
                <ServerIndexContainer />
                <div className="secondary"> 
                    <div className="secondary-header">
                        <Switch>
                            <Route path="/channels/@me" component={() => <input type="text" />} />
                            <Route path="/channels/:dmId" component={() => {
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
        );
    }
    
}

export default Main;