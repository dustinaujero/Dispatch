import React from 'react';
import QuickSwitcher from './quick_switcher';
class QSDiv extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            qs: false
        };

        this.handleQS = this.handleQS.bind(this);
    }

    handleQS() {
        this.setState({qs: true});
    }

    render(){
        return (
            <>
            <div className="search-div" onClick={() => this.handleQS()}>
                <p>Find or start a conversation</p>
            </div>
            {this.state.qs ? <QuickSwitcher parent={this} /> : <div></div>}
            </>
        )
    }
}
export default QSDiv;