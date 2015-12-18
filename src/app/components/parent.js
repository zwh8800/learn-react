var React = require('react');
var Child = require('./Child.js');

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

module.exports = Parent;
