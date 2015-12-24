import React from 'react';
import Util from '../Util';

export default
class Meal extends React.Component {
    handleClick = (e) => {

    };

    render() {
        return (
            <li className="meal">
                <a href={'#/rest/' + this.props.data.key} onClick={this.handleClick}>
                    <span className="target-time">
                        {this.props.data.time::Util.formatDate('HH:mm')}
                    </span>
                    {this.props.data.name}
                </a>
            </li>
        );
    }
}
