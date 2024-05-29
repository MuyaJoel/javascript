// //https://api.github.com/users/$%7Bquery%7D
// //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


const fetchData= async ()=>{
    
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
        div2.style.flexDirection="column"
        div2.style.justifyContent="center"
        div2.style.alignItems="center"
        div2.style.rowGap="10px"
        div.appendChild(div2)

        const div3=document.createElement('div')
        div3.style.display="flex"
        div3.style.flexDirection="column"
        div3.style.justifyContent="center"
        div3.style.alignItems="center"
        div3.style.rowGap="10px"
        div.appendChild(div3)

        const image=document.createElement('img')
        image.src=data.avatar_url
        image.style.width="18%"
        image.style.height="20%"
        image.style.borderRadius="70px"
        div1.appendChild(image)

        const name=document.createElement('p')
        name.textContent=data.name
        name.style.marginLeft="40px"
        name.style.fontSize="20px"
        div1.appendChild(name)
         
        const loc=document.createElement('p')
        loc.textContent=data.location
        div2.appendChild(loc)

        const followers=document.createElement('p')
        followers.textContent=`${data.followers} Followers ${data.public_repos} repos`
        div2.appendChild(followers)

        const uni=document.createElement('p')
        uni.textContent=`${data.company}`
        div3.appendChild(uni)
        const university=document.createElement('p')
        university.textContent=`Bio:${data.bio}`
        div3.appendChild(university)

       })
       .catch((error)=>{
        console.log(error)
       })
    
}
getData()