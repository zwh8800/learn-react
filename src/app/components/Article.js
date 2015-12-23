import React from 'react';

import Title from './Title';
import ArticleContent from './ArticleContent'
import Api from '../Api';

export default
class Article extends React.Component {
    state = {
        article: {
            title: '',
            subTitle: '',
            content: ''
        }
    };
    componentDidMount() {
        Api.getPost()
            .done((response) => {
                if (response.code == 200) {
                    this.setState({article: response.data});
                }
            })
            .fail((xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            });
    }

    render() {
        return (
            <div className="article">
                <Title subTitle={this.state.article.subTitle}>
                    {this.state.article.title}
                </Title>
                <ArticleContent>
                    {this.state.article.content}
                </ArticleContent>
            </div>
        );
    }
}
