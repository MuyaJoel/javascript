
const weatherData= async()=>{
    const search=document.querySelector('#city').value
    const token="c9ff33f324d82af76003491105ccc44d"
    const url =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c9ff33f324d82af76003491105ccc44d`)
    try{
        if(!url.ok){
            throw new Error('Network Error')
        }
        return url.json()

    }catch(error){
        throw error
    }
}

const displayData=()=>{
    weatherData()
    .then(data=>{
        console.log(data)
        const time=document.querySelector('#timezone')
        time.textContent=`timezone ${data.timezone}`
        const county=document.querySelector('#county')
        county.textContent=`${data.name},${data.sys['country']}`
        const temp=document.querySelector('#tempData')
        temp.textContent=`Temp ${data.main['temp']}, Humidity ${data.main['humidity']}`

        
        data.weather.map((rainInfo)=>{
            const rain=document.querySelector('#rainData')
            rain.textContent=`${rainInfo.main}, description ${rainInfo.description}`
            const image=document.querySelector('#icon')
            image.src=`${rainInfo.icon}`
        })

        const wind=document.querySelector('#windData')
        wind.textContent=`Wind speed is ${data.wind['speed']},deg ${data.wind['deg']} & gust ${data.wind['gust']}`
       
    })
    .catch((error)=>{
    
    })
    
}
displayData()
