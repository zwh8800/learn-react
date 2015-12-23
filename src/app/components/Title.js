import React from 'react';

export default
class Title extends React.Component {
    render() {
        return (
            <h1 className="ui header">
                {this.props.children}
                <div className="sub header">
                    {this.props.subTitle}
                </div>
            </h1>
        );
    }
}
