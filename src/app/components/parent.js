var React = require('react');
var Child = require('./Child.js');

var Parent = React.createClass({
    render: function(){
        return (
            <div>
                <div> Hello World </div>
                <Child/>
            </div>
        )
    }
});

module.exports = Parent;