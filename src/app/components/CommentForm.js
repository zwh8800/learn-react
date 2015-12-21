var React = require('react');

export default
class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: '', content: ''};
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }
    handleContentChange(e) {
        this.setState({content: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var content = this.state.content.trim();
        if (!content || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, content: content});
        this.setState({content: ''});
    }
    render() {
        return (
            <div className="comment-form">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <label>尊姓大名</label>
                    <div className="field">
                        <input type="text"
                               placeholder="尊姓大名"
                               value={this.state.author}
                               onChange={this.handleAuthorChange} />
                    </div>
                    <div className="field">
                        <label>评论</label>
                        <textarea placeholder="输入您的评论..."
                                  onChange={this.handleContentChange}
                                  value={this.state.content}>
                        </textarea>
                    </div>
                    <button type="submit" className="ui blue labeled submit icon button">
                        <i className="icon edit">
                        </i>
                        评论
                    </button>
                </form>
            </div>
        );
    }
}
