import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default
class Tooltip extends React.Component {
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this));

        $(ReactDOM.findDOMNode(this)).hover(function () {


        });
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

var response = {
    code: 200,
    data: {
        id: 12552,
        timestamp: '2015-12-29T04:39:44.731Z',
        content: 'Hello world',
        user: {
            type: 'user',
            id: 32768,
            username: 'zzZ',
            avatar: '/public/img/avatar/32768.png'
        }
    }
};

function render(response) {
    const TPL =
        `<div class="comment">
            <div class="comment-author"></div>
            <div class="content"></div>
            <div class="date"></div>
        </div>`;
    const AUTHOR_TPL =
        `<div class="avatar"></div>
        <div class="username"></div>`;
    const NO_AUTHOR_TPL =
        `<div class="anonymous-user">匿名用户</div>`;
    if (response.code != 200) {
        return;
    }
    let data = response.data;
    let comment = $(TPL);
    comment.data('id', data.id);
    comment.find('.content').text(data.content);
    comment.find('.date').text(data.timestamp);
    if (data.user.type == 'user') {
        let author = $(AUTHOR_TPL);
        author.find('.avatar').css('background-image', `url(${data.user.avatar})`);
        author.find('.username').text(data.user.username);
        comment.find('.comment-user').html(author);
    } else {
        let author = $(NO_AUTHOR_TPL);
        comment.find('.comment-user').html(author);
    }
}


export default
class Comment extends React.Component {
    render() {
        let author;
        if (this.props.data.user.type == 'user') {
            let css = {
                'background-image': this.props.data.user.avatar
            };
            author = (
                <div className="comment-author">
                    <div className="avatar" style={css}></div>
                    <div className="username">
                        {this.props.data.user.username}
                    </div>
                </div>
            );
        } else {
            author = (
                <div className="comment-author">
                    <div class="anonymous-user">匿名用户</div>
                </div>
            );
        }
        return (
            <div className="comment">
                {author}
                <div className="content">
                    {this.props.data.content}
                </div>
                <div className="date">
                    {this.props.data.timestamp}
                </div>
            </div>
        );
    }
}

function test() {
    let element = document.getElementById('');

    //小写作为html tag
    let myDivElement = <div className="foo" />;
    React.render(myDivElement, element);


    //大写作为React Component
    let MyComponent = React.createClass({/*...*/});
    let myElement = <MyComponent someProperty={true} />;
    React.render(myElement, element);



    //在属性中使用表达式
    var person = <Person name={window.isLoggedIn ? window.name : ''} />;

    //在子节点中使用表达式
    var content = (
        <Container>
            {window.isLoggedIn ? <Nav /> : <Login />}
        </Container>
    );

    var Nav;
    // 输入 (JSX):
    var app = <Nav color="blue" />;
    // 输出 (JS):
    var app = React.createElement(Nav, {color:"blue"});

    var Nav, Profile;
    // 输入 (JSX):
    var app = <Nav color="blue"><Profile>click</Profile></Nav>;
    // 输出 (JS):
    var app = React.createElement(
        Nav,
        {color:"blue"},
        React.createElement(Profile, null, "click")
    );


    // The ES5 way
    var HelloWorld = React.createClass({
        render: function () {
            return (
                <p>
                    Hello {this.props.name}
                </p>
            );
        }
    });
    ReactDOM.render(<HelloWorld name="MeiCan" />, element);


    // The ES6+ way
    //class HelloWorld extends React.Component {
    //    render() {
    //        return (
    //            <p>
    //                Hello {this.props.name}
    //            </p>
    //        );
    //    }
    //}
    //ReactDOM.render(<HelloWorld name="MeiCan" />, element);


    React.render(person, element);
    React.render(content, element);
}


