const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");


search.addEventListener("click", ()=>{
    
    const APIKey = " 8ee4464ffd5c4dc69a6853c6e2bcf96a";
    const city = document.querySelector(".search-box input").value;
    
    //const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${APIKey}");
//if (response.ok) {
//const data = await response.json();


async function main() {
const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${APIKey}");
if (response.ok) {
const data = await response.json();
    
    //fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${APIKey}")then(response.json())
    //.then(json=>{
        
        const image = document.querySelector(".weather-box img");
        const temperature = document.querySelector(".temperature");
        const description = document.querySelector(".description");
        const humidity = document.querySelector(".humidity");
        const wind = document.querySelector(".wind");
        
        
        temperature.innerHTML = "${parseInt(json.main.temperature)}<span>°C</span>";
        
        description.innerHTML = "${json.weather[0].description}";
        
        humidity.innerHTML = "${json.main.humidity}%";
        
        wind.innerHTML = "${parseInt(json.wind.speed)}Km/h"
    };
};

