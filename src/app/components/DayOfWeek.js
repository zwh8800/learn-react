import React from 'react';
import Util from '../Util';

export default
class DayOfWeek extends React.Component {
    render() {
        return (
            <span className="day-of-week">
                {this.props.date::Util.formatDate('EEE')}
            </span>
        );
    }
}
