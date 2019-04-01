import React from 'react';

class ServerModal extends React.Component {


    render() {
        return (
        <div className="server-create-modal">
            <div className="smodal-header">
                OH, ANOTHER SERVER HUH?
            </div> 
            <div className="saction-area">
                <div className="saction-create">
                    <div>CREATE</div>
                    <div>Create a new server and invite your friends. It's free</div>
                    <div>IMAGE</div>
                    <button>Create a server</button>
                </div>
                <div className="saction-join">
                    <div>JOIN</div>
                    <div>Enter an Instant Invite and join your friend's server</div>
                    <div>IMAGE</div>
                    <button>Join a server</button>
                </div>
            </div>
        </div>
        )
    }

}

export default ServerModal