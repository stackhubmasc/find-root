let root = document.getElementById("root");



const makeList = (name,dp)=>{

    console.log(dp)

    return `<a href="#${name}">
    <img src="${dp}" width=250></img>
    <h4>${name}</h4>
    </a>
    `
}

async function callApi(username){

     const data = await fetch(`https://api.github.com/users/${username}/followers`);
     const followers  = await data.json()
     console.log(followers)

     followers.map(user=>{
         const list = makeList(user.login,user.avatar_url)
         root.innerHTML +=list 
     })
}

window.addEventListener('hashchange',()=>{
    const username = location.hash.split("#")[1]
  
    callApi(username)
})

callApi("stackhubmasc")
