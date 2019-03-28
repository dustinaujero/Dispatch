import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerIndexContainer from '../servers/server_index_container';


class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-page">
                <ServerIndexContainer />
                <div className="secondary"> 
                    <div className="secondary-header">
                        <p>Title</p> 
                        <i class="fas fa-chevron-down"></i>
                    </div>


                    <div className="current-profile">

                    </div>
                
                </div>
                <div className="third">
                    <div>
                        iuniubibibobiubiubiuiboib
                    </div>
                    OIANDFONAFONADFIN
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