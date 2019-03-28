import React from 'react';
import { Route, Switch } from 'react-router-dom';


class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-page">
                <aside className="server-list">

                </aside>
                <Route path="/channels/@me" component={() => (<h1> IN DMS</h1>)}/>
                <Route path="/channels/:server" component={() => (<h1> IN SERVERS</h1>)} />
            </div>
        );
    }
    
}

export default Main;