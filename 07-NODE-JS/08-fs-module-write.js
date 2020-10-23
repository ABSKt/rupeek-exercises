const fs = require('fs')
const path = require('path')
const fileName = process.argv[2]
// fs.writeFile(path.join(__dirname, fileName), 'Hello Fs module', (err, data)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log("written")
// })
// try { 
// fs.writeFileSync(path.join(__dirname, fileName), 'Hello Fs module')
// console.log('Written')
// } catch (err) {
//     console.log(err)
// }

fs.appendFile(path.join(__dirname, fileName), ' new Hello Fs module', (err, data)=>{
    if(err){
        return console.log(err)
    }
    console.log("written")
})