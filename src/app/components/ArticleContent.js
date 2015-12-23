import React from 'react';
import marked from 'marked';

export default
class ArticleContent extends React.Component {
    rawMarkedUp() {
        var html = marked(this.props.children.toString(), {sanitize:true});
        return { __html: html };
    }
    render() {
        return (
            <div className="ui container" dangerouslySetInnerHTML={this.rawMarkedUp()} />
        );
    }
}
