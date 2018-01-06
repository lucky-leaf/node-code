//path <string> | <Buffer> | <URL>
//mode <integer> Default:0o777
//callback <Function>
//  err <Error>
//异步的mkdir(2)。完成回调只有一个可能的异常参数。mode默认为0o777。

const fs = require('fs');
fs.mkdir('dir', (err) => {
    if (err) {
        throw err;
    }
    console.log('create directory successfully!');
});
