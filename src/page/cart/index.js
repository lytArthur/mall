require('./index.css');
require('page/common/header/index.js');
var nav             = require('page/common/nav/index.js');
var _mm             = require('until/mm.js');
var _cart           = require('service/cart.js');
var templateIndex   = require('./index.string');

var page = {
    init:function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad:function(){
        this.loadCart();
    },
    bindEvent: function(){

    },
    loadCart:function(){
        _cart.getCartList(function(res){
            console.log("000");
            console.log(res);
        }, function(errMsg){
            console.log(errMsg);
        });
    }
}




$(function(){
    page.init();
});