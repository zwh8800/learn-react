var React = require('react');

export default
class CommentForm extends React.Component {
    render() {
        return (
            <div className="comment-form">
                <form className="ui form">
                    <label>尊姓大名</label>
                    <div className="field">
                        <input type="text" placeholder="尊姓大名"/>
                    </div>
                    <div className="field">
                        <label>评论</label>
                        <textarea placeholder="输入您的评论..."></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i>
                        评论
                    </div>
                </form>
            </div>
        );
    }
}
