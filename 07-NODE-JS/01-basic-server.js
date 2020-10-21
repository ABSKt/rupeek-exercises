const http = require('http')

const server = http.createServer()
const port  = 3000

server.on('request',(req, res)=> {
    res.write("Hii")
    res.end()
})
server.listen(port,()=>{
    console.log('Running')
})