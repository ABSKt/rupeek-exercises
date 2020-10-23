const fs = require('fs')

const pathName = process.argv[2]

//async

fs.readFile(pathName, 'utf8', (err, data)=>{
    if(err) return console.log(err);
    console.log(data)
})
console.log('In mid')
//sync
try {
 const filedata = fs.readFileSync(pathName, 'utf8')
 console.log(filedata)
} catch(err){
    console.log(err)
}