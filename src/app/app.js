var React = require('react');
var ReactDOM = require('react-dom');

var Parent = require('./components/Parent.js');
var CommentList = require('./components/CommentList.js');
var CommentForm = require('./components/CommentForm.js');
ReactDOM.render((
    <div className="ui container main">
        <Parent />
        <CommentList />
        <CommentForm />
    </div>
), document.getElementById('example'));
