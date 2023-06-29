const http = require('http')
 const port = 5000
 const serverHandler = require('./app')

  const server = http.createServer(serverHandler);


  server.listen(port,()=> console.log('server start'))