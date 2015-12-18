var React = require('react');
var ReactDOM = require('react-dom');

var Parent = require('./components/Parent.js');
var CommentList = require('./components/CommentList.js');
var CommentForm = require('./components/CommentForm.js');

var data = [
    {
        id: 0,
        author: 'zzZ',
        date: '上午11:43',
        avatar: 'img/matt.jpg',
        content: 'PHP是世界上 `最好` 的语言'
    },
    {
        id: 1,
        author: 'hzzZ',
        date: '下午2:10',
        avatar: 'img/elliot.jpg',
        content: '吔屎啦!'
    }
];

ReactDOM.render((
    <div className="ui container main">
        <Parent />
        <CommentList data={data} />
        <CommentForm />
    </div>
), document.getElementById('example'));
