//process 对象是一个 global （全局变量），提供有关信息，控制当前 Node.js 进程。
//作为一个对象，它对于 Node.js 应用程序始终是可用的，故无需使用 require()
//process cwd() 方法返回 Node.js 进程当前工作的目录,等同于全局变量__dirname
console.log(`Current directory:${process.cwd()}`);


