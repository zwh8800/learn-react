import React from 'react';
import DayOfWeek from './DayOfWeek';
import Meal from './Meal';

export default
class OrderDay extends React.Component {
    render() {
        return (
            <li className="order-day">
                <DayOfWeek date={this.props.data.date} />
                <ul className="meals">
                    {
                        this.props.data.meals.map((meal) => (
                            <Meal key={meal.id} data={meal} />
                        ))
                    }
                </ul>
            </li>
        );
    }
}
