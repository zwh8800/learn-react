import React from 'react';
import Child from './child';

export default
class Parent extends React.Component {
    render() {
        return (
            <div className="ui block header">
                <div> Hello Meican </div>
                <Child/>
            </div>
        );
    }
}
