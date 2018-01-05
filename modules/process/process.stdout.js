//process.stdout 属性返回连接到 stdout (fd 1)的流。
//它是一个net.Socket (它是一个Duplex流)， 除非 fd 1 指向一个文件，在这种情况下它是一个可写流。
//例1： 将输入流数据输出到输出流，即输出到终端。
//process.stdin.pipe(process.stdout);

//例2： 要求用户输入两个数值，然后把和输出到终端。
let num1, num2;
process.stdout.write('Please input num1:');
process.stdin.on('data', (chunk) => {
    if (!num1) {
        num1 = Number(chunk);
        process.stdout.write('Please input num2:');
    } else {
        num2 = Number(chunk);
        process.stdout.write(`result:${num1 + num2}`);
    }
});
