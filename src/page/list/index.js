require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm             = require('until/mm.js');
var _product        = require('service/product.js');
// var Pagination      = require('util/pagination/index.js');
var templateIndex   = require('./index.string');

var page = {
    data : {
        listParam : {
            keyword         : _mm.getUrlParama('keyword')    || '',
            categoryId      : _mm.getUrlParama('categoryId') || '',
            orderBy         : _mm.getUrlParama('orderBy')    || 'default',
            pageNum         : _mm.getUrlParama('pageNum')    || 1,
            pageSize        : _mm.getUrlParama('pageSize')   || 20
        }
    },
    init: function(){
        this.bindEvent();
        this.onload();
    },
    onload: function(){
        this.loadList();
    },
    loadList: function(){
       
    },
    bindEvent: function(){

    }
}

$(function(){
    page.init();
});