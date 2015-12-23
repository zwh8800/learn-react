import React from 'react';
import marked from 'marked';

export default
class Comment extends React.Component {
    rawMarkedUp() {
        var html = marked(this.props.children.toString(), {sanitize:true});
        return { __html: html };
    }
    render() {
        return (
            <div className="comment">
                <a className="avatar">
                    <img src={this.props.avatar} />
                </a>
                <div className="content">
                    <a className="author">
                        {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{this.props.date}</span>
                    </div>
                    <div className="text" dangerouslySetInnerHTML={this.rawMarkedUp()} />
                    <div className="actions">
                        <a className="reply">回复</a>
                    </div>
                </div>
            </div>
        );
    }
}
