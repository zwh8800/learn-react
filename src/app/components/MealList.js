import React from 'react';
import OrderDay from './OrderDay';

export default
class MealList extends React.Component {
    render() {
        return (
            <div className="meal-list-wrapper">
                <ul className="meal-list">
                    {
                        this.props.data.dateList.map((date) => (
                            <OrderDay key={date.date} data={date} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}
