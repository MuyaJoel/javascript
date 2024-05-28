// //https://api.github.com/users/$%7Bquery%7D
// //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


const fetchData= async ()=>{
    const token='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'
    const data=document.getElementById('data').value

    const url = await fetch(`https://api.github.com/users/${data}`,{headers: {Authorization: `Bearer ${token}`}})
    try{
        if(!url.ok){
            throw new Error('Error')
        }
        return url.json()
    }catch(error){
        throw error
    }

}
const information=[]
const getData= ()=>{
    // document.getElementById('formData').submit()
    fetchData()
       .then((data)=>{
        console.log(data)
        const div=document.querySelector('.cont2') 
        const div1=document.createElement('div')
        div1.style.display="flex"
        div1.style.flexDirection="row"
        div1.style.justifyContent="spaceBetween"
        div1.style.columnGap="30px"
        div.appendChild(div1)  

        const div2=document.createElement('div')
        div2.style.display="flex"
        div2.style.flexDirection="row"
        div2.style.justifyContent="center"
        div2.style.alignItems="center"
        div2.style.columnGap="10px"
        div.appendChild(div2)

        const div3=document.createElement('div')
        div3.style.display="flex"
        div3.style.flexDirection="row"
        div3.style.justifyContent="center"
        div3.style.alignItems="center"
        div3.style.columnGap="10px"
        div.appendChild(div3)

        const image=document.createElement('img')
        image.src=data.avatar_url
        image.style.width="20%"
        image.style.height="30%"
        image.style.borderRadius="50px"
        div1.appendChild(image)

        const name=document.createElement('p')
        name.textContent=data.login
        name.style.marginLeft="40px"
        name.style.fontSize="20px"
        div1.appendChild(name)

        const loc=document.createElement('p')
        loc.textContent=data.location
        div1.appendChild(loc)

        const follow=document.createElement('p')
        follow.textContent="Followers"
        div2.appendChild(follow)

        const followers=document.createElement('p')
        followers.textContent=data.followers
        div2.appendChild(followers)

        const repo=document.createElement('p')
        repo.textContent="Repositories"
        div3.appendChild(repo)

        const repos=document.createElement('p')
        repos.textContent=data.public_repos
        div3.appendChild(repos)

       })
       .catch((error)=>{
        console.log(error)
       })
    
}
getData()