function sumPromise(x,y){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x+y)
        }, 3000)
    })
}
sumPromise(20,12)
    .then((data)=>{
        return sumPromise(data,15)
    })
    .then(data=>sumPromise(data,11))
    .then((data)=>console.log(data))
    .catch(err =>console.error(err))