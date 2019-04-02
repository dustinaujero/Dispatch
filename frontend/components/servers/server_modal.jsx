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

    render() {
        return (
            <div className="loading">
                <div className="server-create-modal">
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