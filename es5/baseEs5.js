'use strict';

var B = {};
/**
 * 获取指定的 querystring 中指定 name 的 value
 * @param {String} name
 * @param {String} querystring
 * @return {String|undefined}
 *
 * query('hello', '?hello=js') 结果是 js
 *
 */
B.query = function (name, querystring) {
  var reg = new RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)');
  var ret = reg.exec(querystring) || [];

  return ret[1];
};
/**
 * 序列化对象，就是把对象转成 url 字符串
 * @param {obj} obj
 * @return {String|null}
 *
 * serialize({hello: 'js', hi: 'test'}) 结果是 'hello=js&hi=test'
 */
B.serialize = function (obj) {
  if (!obj) {
    return null;
  }
  var url = '';

  (function foreach(obj) {
    var kvArr = Object.entries(obj);
    kvArr.forEach(function (item) {
      if (Object.prototype.toString.call(item[1]) == '[object Object]') {
        foreach(item[1]);
      } else {
        url += item.join('=') + '&';
      }
    });
  })(obj);
  return url.substring(0, url.length - 1);
};

/**
 * 根据选择器查找 DOM
 * 就是模拟 $() ，当然，这里返回元素的 DOM 对象即可
 * @param {String} selector
 * @return {DOM|null}
 */
B.$ = function (selector) {
  var rIsIdName = /^#{1}[-_a-zA-Z]{1}[-\w]*$/;
  var rIsClassName = /^\.{1}[-_a-zA-Z]{1}[-\w]*$/;
  var rIsHtmlName = /^[a-zA-Z]+$/;
  var rIsCustomName = /^\[{1}[-_a-zA-Z]{1}[-\w]*={1}[-_a-zA-Z]{1}[-\w]*\]{1}$/;
  var oSelector = {};
  if (typeof selector !== 'string') {
    return null;
  }
  if (rIsIdName.test(selector) || rIsCustomName.test(selector)) {
    oSelector = document.querySelector(selector);
    return oSelector;
  } else if (rIsClassName.test(selector) || rIsHtmlName.test(selector) || rIsCustomName.test(selector)) {
    oSelector = document.querySelectorAll(selector);
    if (oSelector.length === 1) {
      oSelector = document.querySelector(selector);
    }
    return oSelector;
  } else {
    return null;
  }
};

/**
 * 删除 DOM 节点
 * @param {DOM} node
 * @return {DOM|null}
 */

B.removeNode = function (node) {
  var p = node && node.parentNode;

  if (!p) {
    return null;
  }
  return p.removeChild(node);
};

/**
 * 在 target 节点之后插入 node 节点
 * 类似 $().insertAfter()
 * @param {DOM} node
 * @param {DOM} target
 * @return {null|true}
 */
B.insertAfter = function (node, target) {
  if (!node || !target) {
    return null;
  }
  if ((node.nodeType === 3 || node instanceof HTMLElement) && target instanceof HTMLElement) {
    target.appendChild(node);
    return true;
  } else {
    return null;
  }
};

/**
 * 添加类名
 * @param {DOM} obj
 * @param {String|Array} cls
 * @return {null}
 */

B.addClass = function (obj, cls) {
  if (!obj || !cls) {
    console.log('ahha');
    return null;
  }
  //获取 class 内容.
  var obj_class = obj.className;
  //判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  var blank = obj_class != '' ? ' ' : '';
  if (cls instanceof Array) {
    cls = cls.join(' ');
  }
  //组合原来的 class 和需要添加的 class.
  var added = obj_class + blank + cls;
  //替换原来的 class.
  obj.className = added;
};

/**
 * 移除类名
 * @param {DOM} obj
 * @param {String|Array} cls
 * @return {null}
 */

B.removeClass = function (obj, cls) {
  if (!obj || !cls) {
    return null;
  }
  //获取 class 内容, 并在首尾各加一个空格 'abc bcd' -> ' abc bcd '
  var obj_class = ' ' + obj.className + ' ';
  //将多余的空字符替换成一个空格 '  abc bcd  ' -> ' abc bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' ');
  if (cls instanceof Array) {

    cls.forEach(function (item) {
      return obj_class = obj_class.replace(' ' + item + ' ', ' ').replace(/(\s+)/gi, ' ');
    });
    obj.className = obj_class.trim();
  } else if (typeof cls === 'string') {
    obj.className = obj_class.replace(' ' + cls + ' ', ' ').trim();
  }
};

/**
 * 获取绝对路径
 * @param {String} url
 * @return {String}
 * getAbsoluteUrl('/jerojiang') => 'http://imweb.io/jerojiang'
 * 在当前页面获取绝对路径，这里要创建 A 元素，测试用例看你们的了
 */
B.getAbsoluteUrl = function (url) {
  if (!url) {
    return false;
  }
  var a = document.createElement('a');
  a.href = './';
  var href = a.href.toString();
  a = null;
  if (href.indexOf('/') != -1) {
    href = href.substring(0, href.lastIndexOf('/'));
  }
  url = href + '/' + url;
  return url;
};

/**
 * 防抖动
 * 防抖动函数了啦，有做个这个习题，不清楚回去复习
 * @param {Function} callback
 * @param {Number} time
 */

B.debounce = function (callback) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  var timer = void 0;

  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        callback();
        clearTimeout(timer);
        timer = null;
      }, time);
    }
  };
};

/**
 * 根据传入的索引删除对应的项
 * @param {Number} index
 * @param {Array} arr
 * @return {Undefined|null|Array}
 */
B.removeItemByIndex = function (index, arr) {

  if (!Array.isArray(arr)) {
    return arr;
  }
  if (typeof index !== 'number') {
    return undefined;
  }
  if (index >= 0 && index >= arr.length || index < 0 && Math.abs(index) > arr.length) {
    return null;
  }
  if (index < 0) {
    arr.reverse().splice(Math.abs(index) - 1, 1);
    arr.reverse();
  } else {
    arr.splice(index, 1);
  }
  return arr;
};
/**
 * 判断是否是数字
 * @param {String} s1
 * @param {String} s2
 * @return null|String}
 */
B.isDigit = function (value) {
  var patrn = /^[0-9]*$/;
  if (patrn.exec(value) === null || value === '') {
    return false;
  } else {
    return true;
  }
};

module.exports = B;
