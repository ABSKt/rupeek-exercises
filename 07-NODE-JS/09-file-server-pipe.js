const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer((req, res)=>{
    const pathName = req.url.slice(1)
    const rs = fs.createReadStream(req.url.slice(1),(err, data)=>{
        if(err) return console.log(err)
        console.log(data)
    })
    const ws = fs.createWriteStream(path.join(__dirname,'file.txt'),(err, data)=>{
        if(err) return console.log(err)
        console.log(data)
    })
    rs.pipe(ws)
})

server.listen(3000)