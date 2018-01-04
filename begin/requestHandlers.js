const querystring=require('querystring');

exports.start=(res,postData)=>{
    let body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(body);
    res.end();
};
exports.upload=(res,postData)=>{
    console.log('upload called.')
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
    res.write(`You've sent:${querystring.parse(postData).text}`);
    res.end();
};