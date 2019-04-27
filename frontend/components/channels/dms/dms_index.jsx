import React from 'react';

class DMsIndex extends React.Component {

    constructor(props){
        super(props);

        this.handleNewDM = this.handleNewDM.bind(this);
    }

    componentDidMount() {
        this.props.fetchDMs();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.dmId !== prevProps.match.params.dmId) {
            this.props.fetchDMs();
        }
    }
    handleNewDM() {

    }
    render() {
        const dms = this.props

    }
}

export default DMsIndex;