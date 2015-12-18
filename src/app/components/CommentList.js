var React = require('react');
var Comment = require('./Comment.js');

class CommentList extends React.Component {
    render() {
        return (
            <div className="ui comments">
                <h3 classNae="ui dividing header">
                    评论
                </h3>
                <Comment author="zzZ" date="上午11:43" avatar="img/matt.jpg">
                    PHP是世界上 `最好` 的语言
                </Comment>
                <Comment author="hzzZ" date="下午2:10" avatar="img/elliot.jpg">
                    吔屎啦!
                </Comment>
            </div>
        );
    }
}

module.exports = CommentList;
