const http = require('http');
const port = process.env.PORT || 3000;

const app = require('./index')
const server = http.createServer(app);
console.log('Server running on ',port)
server.listen(port);