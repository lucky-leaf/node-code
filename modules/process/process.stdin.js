//process.stdin 属性返回连接到stdin(fd 0)的流。 它是一个net.Socket(它是一个Duplex流)，除非 fd 0指向一个文件，
//在这种情况下它是一个可读流。
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`data:${chunk}`);
    }
});
process.stdin.on('end', () => {
    process.stdout.write('end');
});
