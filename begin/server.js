const http=require('http');
const url=require('url');

exports.start=(route,handle)=>{
    http.createServer((req,res)=>{
        let pathname=url.parse(req.url).pathname;
        let postData='';
        console.log(`Request for ${pathname} received.`);
        req.setEncoding('utf8');
        req.on('data',(chunk)=>{
            postData+=chunk;
            console.log(`Received POST data chunk ${chunk}`);
        });
        req.on('end',()=>{
            route(handle,pathname,res,postData);
        });
    }).listen(8888);
    console.log('Server is running at http://127.0.0.1:8888/');
}