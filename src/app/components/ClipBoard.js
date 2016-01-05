import React from 'react';

export default
class ClipBoard extends React.Component {
    state = {
        copyData: ''
    };

    copyHandler = (e) => {
        console.log(e);
        this.setState({
            copyData: e.clipboardData.getData('text')
        });
    };
    render() {
        return (
            <div>
                <input type="text" onCopy={this.copyHandler} onCut={this.copyHandler} />
                <p>
                    {this.state.copyData}
                </p>
            </div>
        )
    }
}
