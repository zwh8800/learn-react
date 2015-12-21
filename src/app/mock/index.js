import Mock from 'mockjs';
import $ from 'jquery';

export default
function MockServer() {
    Mock.mockjax($);

    Mock.mock('/api/comments', {
        'code': 200,
        'data|1-10': [
            {
                'id|+1':0,
                'author':'zzZ',
                'date':'上午11:43',
                'avatar':'img/matt.jpg',
                'content':'PHP是世界上 `最好` 的语言'
            }
        ]
    });

}
