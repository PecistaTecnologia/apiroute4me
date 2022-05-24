const User = require('./src/routes');
const http = require('http');
 
const server = http.createServer((req, res) => {
    console.log('server rodando!')
})

server.listen(8080);

