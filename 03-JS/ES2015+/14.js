const axios = require('axios')

async function getData(name){
    let data = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${name}`)
    let user = await axios.get(`https://jsonplaceholder.typicode.com/users/${data.data[0].id}/posts`)
    let post = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${user.data[0].userId}`)
    const datas= post.data
    const email = datas.map(data=>data.email)
    return email
}

console.log(getData("Bret"))