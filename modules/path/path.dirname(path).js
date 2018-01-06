//path <string>
//返回: <string>
//path.dirname() 方法返回一个 path 的目录名，类似于 Unix 中的 dirname 命令。
//例子：
//path.dirname('/foo/bar/baz/asdf/quux');
//    // 返回: '/foo/bar/baz/asdf'
//如果 path 不是一个字符串，则抛出 TypeError。
//注意：尾部目录分隔符被忽略

const path = require('path');
console.log(path.dirname('/one/two/three/'));
