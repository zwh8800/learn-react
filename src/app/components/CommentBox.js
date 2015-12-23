import React from 'react';
import $ from 'jquery';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Api from '../Api'

export default
class CommentBox extends React.Component {
    state = { data: [] };
    componentDidMount() {
        Api.getComments()
            .done((response) => {
                if (response.code == 200) {
                    this.setState({data: response.data});
                }
            })
            .fail((xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            });
    }
    handleCommentSubmit = (comment) => {
        var comments = this.state.data;
        var last = comments[comments.length - 1];
        comment.id = last.id + 1;
        comments.push(comment);
        this.setState({data: comments});
    };
    render() {
        return (
            <div>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}
