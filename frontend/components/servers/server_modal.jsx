import React from 'react';

class ServerModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 1
        }
    }

    handleClick(type) {
        this.setState({type})
    }
    handleExit() {
        $(".loading").css("visibility", "hidden");
        this.props.history.push("/channels/@me");
    }

    render() {
        return (
            <div className="loading">
                <div className="server-create-modal">
                    <button onClick={() => this.handleExit()}>exit</button>
                    <div className="saction-area">
                        <div className="saction-create">
                            <button onClick={() => handleClick("create")}>Create a server</button>
                        </div>
                        <div className="saction-join">
                            <button onClick={() => handleClick("join")}>Join a server</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ServerModal