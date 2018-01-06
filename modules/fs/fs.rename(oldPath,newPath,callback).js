//oldPath <string> | <Buffer> | <URL>
//newPath <string> | <Buffer> | <URL>
//callback <Function>
//  err<Error>
//异步的rename(2)。完成回调只有一个可能的异常参数。
const fs = require('fs');
fs.rename('old.txt','new.txt',(err) => {
    if(err){
        throw err;
    }
    console.log('rename successfully!');
})
