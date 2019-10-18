import React from 'react';
import MessageUploadSplash from './message_upload_splash';

class MessageUploadContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropped: false
        }
    }
    handleDragOver(e){

    }
    handleDragLeave(e) {
        e.preventDefault();
        this.props.main.setState({ drag: false });
    }
    handleDrop(e) {
        debugger
        e.preventDefault();
        e.stopPropagation();
        this.setState({dropped: true})
        // if (App.cable.subscriptions.subscriptions.length > 0) {
        //     const file = e.dataTransfer.items[0].getAsFile();
        //     debugger
        // }
    }
    render() {
        return (
            <div className="upload-modal"
                onDropCapture={this.handleDrop}
                onDrop={this.handleDrop}
                onDragLeave={this.handleDragLeave.bind(this)}
            >
                {this.state.dropped ? (
                    <div className="upload-border">
                        <div className="upload-form">
                            <div className="upload-form-title">Drag & Drop</div>
                            <div className="upload-form-desc"> dropped</div>
                        </div>
                    </div>
                    ) : <MessageUploadSplash/>}
            </div>
        )
    }
}

export default MessageUploadContainer;