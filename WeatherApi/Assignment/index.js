
const weatherData= async()=>{
    const token="c9ff33f324d82af76003491105ccc44d"
    const url =await fetch(`https://openweathermap.org/api`, {header: {Authorization: `Bearer ${token}`}})
    try{
        if(!url.ok){
            throw new Error('Network Error')
        }
        return url

    }catch(error){
        throw error
    }
}

const displayData=()=>{
    weatherData()
    .then(data=>{
        console.log(data)
       
    })
    .catch((error)=>{
    
    })
    
}
displayData()
