# Unlunar

- a wrapper function package（自己写的封装一些实用函数的包）
- npm-url：[npm](https://www.npmjs.com/package/unlunar)
- git-url：[github](https://github.com/UnLunar/unlunar)
<br>
<br>

## Installation

You can install with npm:

```
$ npm install unlunar
```
<br>

## Usage

```
import B from 'unlunar'
```
<br>

## Function
### query(name, querystring)
- Function for gets the value of the specified name in the specified querystring
```
B.query('name', '?name=js') //return 'js'
```
<br>

### serialize(data)
- Function for turn the object into a url string
```
B.serialize({hello: 'js'}) //return '?hello=js'
```
<br>

### $(selector)
- Function for simulating jQuery
```
B.$(selector) //return {DOM|undefined}
```
<br>

### removeNode(node)
- Function for Deleting DOM node
```
B.removeNode(node) //return {DOM}
```
<br>

### insertAfter(node)
- Function for inserting the node node after the target node
```
B.insertAfter(node, target) //return true or false
```
<br>

### addClass(node, className)
- Function for add class name
```
B.addClass(node, className) //return true or false
```
<br>

### removeClass(node, className)
- Function for remove class name
```
B.removeClass(node, className) //return true or false
```
<br>

### getAbsoluteUrl(url)
- Function for get absolute url
```
B.getAbsoluteUrl('/hhh') //return 'https://github.com/hhh'
```
<br>

### debounce(callback, time)
- Function for avoiding shake
- example:
```
  test('test true', (done) => {
    let total = 0
    const debounce = B.debounce(() => {
      total += 1
      expect(total).toBe(1)
      done()
    }, 200)

    for (let i = 0; i < 100; i++) {
      debounce()
    }
    expect(total).toBe(0) // 调用一百次 debouce ，马上检测 total
  })
```
<br>

### removeItemByIndex(index, arr)
- Function for remove item by index
```
B.removeItemByIndex(1, [1, 2, 3]) //return [1, 3]
```
<br>

### isDigit(string)
- Function to make sure the string's letters are all numbers
```
expect(B.isDigit('123')).toBe(true)
expect(B.isDigit('12s3')).toBe(false)
```
<br>

### filter(string)
- Function for XSS filter
```
B.filter('<script>alert</script><a href="a.com" onclick="alert(1)">test</a>')
// return '<a href="a.com" >test</a>'
```
<br>

### htmlEncode(string)
- Function for htmlEncode
```
B.htmlEncode('<script></script>')  // return '&lt;script&gt;&lt;/script&gt;'
```
<br>

### JavaScriptEncode(string)
- Function for JavaScriptEncode
```
B.JavaScriptEncode('<script>alert</script><a href="a.com" onclick="alert(1)">test</a>')
// return '\\x3Cscript\\x3Ealert\\x3C\\x2Fscript\\x3E\\x3Ca href=\\x22a.com\\x22 onclick=\\x22alert(1)\\x22\\x3Etest\\x3C\\x2Fa\\x3E'
```
<br>

### URLEncode(string)
- Function for URLEncode
```
B.URLEncode('http://www.w3school.com.cn/My first/')
// return 'http://www.w3school.com.cn/My%20first/'
```
