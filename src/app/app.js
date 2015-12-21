import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './components/parent';
import CommentBox from './components/CommentBox';
import MockServer from './mock';

MockServer();

ReactDOM.render((
    <div className="ui container main">
        <Parent />
        <CommentBox url="/api/comments" />
    </div>
), document.getElementById('example'));
