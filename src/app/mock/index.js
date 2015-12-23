import Mock from 'mockjs';
import $ from 'jquery';

export default
function MockServer() {
    Mock.mockjax($);

    Mock.mock('/api/comments', {
        'code': 200,
        'data|5-10': [
            {
                'id|+1':0,
                'author|1': [
                    'zzZ',
                    'hzzZ'
                ],
                'date':'上午11:43',
                'avatar|1': [
                    'img/matt.jpg',
                    'img/elliot.jpg'
                ],
                'content|1': [
                    'PHP是世界上`最好`的语言',
                    '吔**屎**啦',
                    '呵呵',
                    '蛤蛤',
                    '逗'
                ]
            }
        ]
    });

    Mock.mock('/api/post', {
        'code': 200,
        'data': {
            title: 'Markdown',
            subTitle: '嘿嘿嘿',
            content: `### 欢迎使用 Cmd - 在线 Markdown 编辑阅读器粗体文本

------

我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，**Cmd Markdown** 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。

您可以使用 Cmd Markdown：

> * 整理知识，学习笔记
> * 发布日记，杂文，所见所想
> * 撰写发布技术文稿（代码支持）
> * 撰写发布学术论文（LaTeX 公式支持）
`
        }
    });

}
