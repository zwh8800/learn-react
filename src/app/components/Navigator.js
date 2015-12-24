import React from 'react';
import MealList from './MealList';
import Logo from './Logo';

export default
class Navigator extends React.Component {
    state = {
        mealData: {
            isLoaded: true,
            currentMeal: null,
            currentRest: null,

            data: {
                startDate: "2015-12-24",
                endData: "2015-12-31",
                dateList: [
                    {
                        date: "2015-12-24",
                        meals:[
                            {
                                id: "6f34a5fe-3e42-4ddd-8f0a-2d247609d859",
                                key: "6f34a5fe-3e42-4ddd-8f0a-2d247609d859/2015-12-24 11:00",
                                time: "2015-12-24 11:00",
                                name: "美餐花园桥午餐",
                                free: false,
                                limit: 999999999,
                                namespace: "meican_new",
                                available: false
                            },
                            {
                                id: "e2470c1d-08fa-402e-9f8b-71bcc1f80c92",
                                key: "e2470c1d-08fa-402e-9f8b-71bcc1f80c92/2015-12-24 17:00",
                                time: "2015-12-24 17:00",
                                name: "美餐花园桥晚餐",
                                free: false,
                                limit: 1000000,
                                namespace: "meican_dinner_new",
                                available: false
                            }
                        ]
                    },
                    {
                        date: "2015-12-25",
                        meals:[
                            {
                                id: "6f34a5fe-3e42-4ddd-8f0a-2d247609d859",
                                key: "6f34a5fe-3e42-4ddd-8f0a-2d247609d859/2015-12-25 11:00",
                                time: "2015-12-25 11:00",
                                name: "美餐花园桥午餐",
                                free: false,
                                limit: 999999999,
                                namespace: "meican_new",
                                available: false
                            },
                            {
                                id: "e2470c1d-08fa-402e-9f8b-71bcc1f80c92",
                                key: "e2470c1d-08fa-402e-9f8b-71bcc1f80c92/2015-12-25 17:00",
                                time: "2015-12-25 17:00",
                                name: "美餐花园桥晚餐",
                                free: false,
                                limit: 1000000,
                                namespace: "meican_dinner_new",
                                available: false
                            }
                        ]
                    }
                ]
            }
        }
    };
    render() {
        return (
            <div className="nav-section">
                <MealList data={this.state.mealData.data} />
                <Logo />
            </div>
        );
    }
}
