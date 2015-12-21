import React from 'react';
import $ from 'jquery';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(response) {
                if (response.code == 200) {
                    this.setState({data: response.data});
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    }
    handleCommentSubmit(comment) {
        var comments = this.state.data;
        var last = comments[comments.length - 1];
        comment.id = last.id + 1;
        comments.push(comment);
        this.setState({data: comments});
    }
    render() {
        return (
            <div>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}
