//path <string> | <Buffer> | <URL>
//callback <Function>
//  err <Error>
//异步的unlink(2)。完成回调只有一个可能的异常参数。

const fs = require('fs');
fs.unlink('test.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('successfully deleted!');
});
