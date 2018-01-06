//path <string> | <Buffer> | <URL>
//options <string> | <Object>
//encoding <string> 默认 = 'utf8'
//callback <Function>
//  err <Error>
//files <string[]> | <Buffer[]>
//异步的 readdir(3)。 读取一个目录的内容。 回调有两个参数 (err, files)，其中 files 是目录中不包括 '.' 和 '..' 的文件名的数组。
//可选的 options 参数用于传入回调的文件名，它可以是一个字符串并指定一个字符编码，
//或是一个对象且由一个 encoding 属性指定使用的字符编码。 
//如果 encoding 设为 'buffer'，则返回的文件名会被作为 Buffer 对象传入。
