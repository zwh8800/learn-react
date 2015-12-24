import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './components/CommentBox';
import Article from './components/Article';
import MockServer from './mock';
import Navigator from './components/Navigator';

MockServer();

ReactDOM.render((
    <div>
        <Navigator />
    </div>
), document.getElementById('react-root'));
