const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
const port = 3000


server.on('request', (req, res) => {
    const url = req.url.slice(1)
    const data = url.split('/')
    console.log(data)
    if (data[0] === 'add') {
        fs.appendFile(path.join(__dirname, 'log.txt'), `add ${data[1]} ${data[2]} ${(+data[1]) + (+data[2])}`, (err, dat) => {
            if (err) {
                return console.log(err)
            }
            else {
                console.log("done")
                res.end()
            }
        })
    }
    else if(data[0]==="multiply"){
        fs.appendFile(path.join(__dirname, log.txt), `multiply ${data[1]} ${data[2]} ${(+data[1])* (+data[2])}`, (err, dat) => {
            if (err) {
                return console.log(err)
            }
            else {
                console.log("done")
            }
        })
    }
    res.end(req.url)
})
server.listen(port, () => {
    console.log('Running')
})