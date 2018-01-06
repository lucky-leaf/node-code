//from <string> 解析时相对的基本 URL。
//to <string> 要解析的超链接 URL。
//url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。
//
//例子：

const url = require('url');
console.log(url.resolve('/one/two/three', 'four'));         // '/one/two/four'
console.log(url.resolve('http://example.com/', '/one'));    // 'http://example.com/one'
console.log(url.resolve('http://example.com/one', '/two')); // 'http://example.com/two'
