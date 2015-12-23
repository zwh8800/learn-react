import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './components/CommentBox';
import Article from './components/Article';
import MockServer from './mock';

MockServer();

ReactDOM.render((
    <div className="ui container main">
        <Article />
        <CommentBox />
    </div>
), document.getElementById('react-root'));
