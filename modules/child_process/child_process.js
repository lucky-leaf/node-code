//child_process 模块提供了衍生子进程的功能，它与 popen(3) 类似，但不完全相同。
//这个功能主要由 child_process.spawn() 函数提供：

const { spawn } = require('child_process');
const ls = spawn('ls',['-lh','/usr']);

ls.stdout.on('data', (data) => {
    console.log(`输出:${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`错误:${data}`);
});

ls.on('close', (code) => {
    console.log(`子进程退出码:${code}`);
});
