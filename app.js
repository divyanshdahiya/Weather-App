// api key : 021b6592f1d6cd88cabae5596138c71e

const kelvin = 273

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

function displayWeather(){  
    iconElement.innerHTML=` <img src="./icons/${weather.iconId}.png" alt="weather-icon"></img>`
    tempElement.innerHTML= `${weather.temperature.value}°<span>C</span>`
    descElement.innerHTML=`weather.description`
    locationElement.innerHTML= `${weather.city}, ${weather.country}`
}
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError)
}
else{
    notificationElement.style.display = "block"
    notificationElement.innerHTML= `<p>Browser doesn't Support Geolocation</p>`
}

function setPosition (position){
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

        getWeather(latitude, longitude)
}

function showError (error){
    notificationElement.style.display= "block"
    notificationElement.innerHTML= `<p> ${error.message} </p>`
}