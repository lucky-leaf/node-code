//path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
//options <Object> | <string>
//  encoding <string> | <null> 默认为null。
//  flay <string> 默认为 'r'。
//callback <Function>
//  err <Error>
//  data <string> | <Buffer>
//异步地读取一个文件的全部内容。例子：

const fs = require('fs');
fs.readFile('/etc/passwd', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

//回调有两个参数 (err, data)，其中 data 是文件的内容。
//如果未指定字符编码，则返回原始的 buffer。
//如果 options 是一个字符串，则它指定了字符编码。 例子：
//fs.readFile('/etc/passwd', 'utf8', callback);
//注意：当 path 是一个目录时，fs.readFile() 与 fs.readFileSync() 的行为与平台有关。
//在 macOS、Linux 与 Windows 上，会返回一个错误。 在 FreeBSD 上，会返回目录内容的表示。
//在 macOS、Linux 与 Windows 上：
//fs.readFile('<directory>', (err, data) => {
//  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
//  });
//
//  //  在 FreeBSD 上：
//  fs.readFile('<directory>', (err, data) => {
//    // => null, <data>
//    });
//任何指定的文件描述符必须支持读取。
//注意：如果一个文件描述符被指定为 path，则它不会被自动关闭。
