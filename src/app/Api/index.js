import $ from 'jquery';
import _ from 'underscore'

/**
 * request
 * @param {String} url 请求链接地址
 * @param {String} method http请求方法，默认为GET
 * @param {String} dataType 数据类型：json、jsonp...，【可选】
 * @param {Object} data ajax请求参数
 */
function request(url, method, dataType, data, _async) {
    return $.ajax({
        url: url,
        method: method || 'GET',
        dataType: _.isObject(dataType) ? 'json' : dataType,
        data: _.isObject(dataType) ? dataType : (data || {})
    });
}

export default
{
    getComments: _.partial(request, '/api/comments', 'GET', 'json', true),
    getPost: _.partial(request, '/api/post', 'GET', 'json', true)
}
