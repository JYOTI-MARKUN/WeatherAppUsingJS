const userInput = document.querySelector(".input-value")
const searchButton = document.querySelector(".search-btn")
const tempretureValue = document.querySelector(".tem-Value")
const tempFeelsLike = document.querySelector(".feels-like")
const cityName = document.querySelector(".city-Name")
const humidValue = document.querySelector(".humid-value")
const windSpeed = document.querySelector(".Wind-value")
const removeClass = document.querySelector(".remove")
const invalidCity = document.querySelector(".add")
const imageUpdate = document.querySelector(".weather-icon")


const iconObj = {
    "Haze":"./images/haze.png",
    "Clouds":"./images/clouds.png",
    "Rain":"./images/rainy.png",  
    "Mist":"./images/mist.png" ,
     "wind":"./images/wind.png",
     "snow":"./images/snow.png",
     "humidity":"./images/humidity.png",
     "sun":"./images/sun.png",
     "storm":"./images/storm.png",
     "drizzle":"./images/drizzle.png"
     

}


// fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9e93a88826f143a38dfb6e99e7042e50`)
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data)})


function weatherData(name){

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=9e93a88826f143a38dfb6e99e7042e50`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.cod){ 
            console.log(data)                     
            console.log(data.weather[0].main) 
            if(iconObj.hasOwnProperty(data.weather[0].main) ){
                console.log("y")
               imageUpdate.src=iconObj[data.weather[0].main]
            }                   
            removeClass.classList.remove("weather-data")
            invalidCity.classList.add("invalid-city")
            cityName.innerText = data.name
            tempretureValue.innerText = Math.floor(data.main.temp)
            tempFeelsLike.innerText = `Feels like ${data.main.feels_like}`
            console.log(data.main.humidity)
            humidValue.innerText = `${data.main.humidity}%`
            windSpeed.innerText = `${data.wind.speed}km/h`
            console.log(data.wind.speed)
        }else{
            invalidCity.classList.remove("invalid-city")
            removeClass.classList.add("weather-data") 
        }
  
    }    
    ).catch((error)=>
    {
        invalidCity.classList.remove("invalid-city")
        removeClass.classList.add("weather-data") 
        console.log("Error Fetching in Data:",error)
    }
)
}


userInput.addEventListener("input",(e)=>{ 
   })

searchButton.addEventListener("click",(e)=>{  
    removeClass.classList.remove("weather-data")
    const cityFullName= userInput.value   
    weatherData(cityFullName)   
})



