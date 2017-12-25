
require('./index.css');
require('../modules.js');

var _mm  = require("until/mm.js");

var html = '<div>{{data}}</div>';
var data = {
    data: "11111"
};
_mm.renderHtml(html,data);
console.log(_mm.renderHtml(html,data));