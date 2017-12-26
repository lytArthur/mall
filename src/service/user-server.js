
var _mm = require('until/mm.js');

var _user = {
    //退出
    logout: function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('./get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        })
    },
    //检查用户登陆
    checkLogin: function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('./logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        })
    }
}
module.exports = _user;