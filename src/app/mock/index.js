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

}
