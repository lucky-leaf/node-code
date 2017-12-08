const server=require('./server.js');
const router=require('./router.js');
const requestHandlers=require('./requestHandlers.js');

let handle={};
handle['/']=requestHandlers.start;
handle['/start']=requestHandlers.start;
handle['/upload']=requestHandlers.upload;
server.start(router.route,handle);