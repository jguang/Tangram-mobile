/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 */

///import baidu.object;

/**
 * 检测一个对象是否是空的.
 * 需要注意的是：
 * 如果污染了Object.prototype或者Array.prototype，那么
 * baidu.object.isEmpty({})或者
 * baidu.object.isEmpty([])可能返回的就是false.
 * @param {Object} obj 需要检测的对象.
 * @return {boolean} 如果是空的对象就返回true.
 */
baidu.object.isEmpty = function(obj) {
    for (var key in obj) {
        return false;
    }
    
    return true;
};






















/* vim: set ts=4 sw=4 sts=4 tw=100 noet: */
