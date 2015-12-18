import React from 'react';
import Comment from './Comment';

export default
class CommentList extends React.Component {
    render() {
        var comments = this.props.data.map(comment =>
            <Comment key={comment.id} author={comment.author} date={comment.date} avatar={comment.avatar}>
                {comment.content}
            </Comment>
        );

        return (
            <div className="ui comments">
                <h3 classNae="ui dividing header">
                    评论
                </h3>
                {comments}
            </div>
        );
    }
}
