const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', function(req, res) {
    console.log('路径：' + req.url)
    console.log('地址：', req.socket.remoteAddress, req.socket.remotePort)
    var url = req.url
    if (url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500 服务器挂了')
            }
            res.end(data)
        })
    } else if (url === '/login') {
        res.end('login page')
    } else if (url === '/register') {
        res.end('register page')
    } else {
        res.end('404 Not Found.')
    }
})

// 3. 绑定端口号，启动服务
server.listen(3000, function() {
    console.log('服务器启动成功，可以访问了。。。')
    console.log('http://localhost:3000');
})