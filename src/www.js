const http = require('http')
const PORT = 8000
const serverHandle = require('./appNode')
const server = http.createServer(serverHandle)
server.listen(PORT)