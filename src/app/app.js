import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './components/parent';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

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
