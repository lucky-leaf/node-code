//path <string>
//ext <string> 可选的文件扩展名
//返回: <string>
//path.basename() 方法返回一个 path 的最后一部分，类似于 Unix 中的 basename 命令。
//尾部的分隔符被忽略。
//例子：

const path = require('path');
console.log(path.basename('/one/two/index.js'));
console.log(path.basename('/one/two/index.js','.js'));

//如果 path 不是一个字符串或提供了 ext 但不是一个字符串，则抛出 TypeError。
