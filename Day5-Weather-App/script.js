

let apiKey = "186a581d3ecd03db9da86fed759de0d9";

/* 🔍 SEARCH BY CITY */
async function getWeather(){

let city = document.getElementById("city").value;

if(city === ""){
document.getElementById("result").innerText = "Enter city name";
return;
}

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{
let response = await fetch(url);
let data = await response.json();

if(data.cod !== 200){
document.getElementById("result").innerText = "City not found";
return;
}

showWeather(data);

}catch{
document.getElementById("result").innerText = "Error";
}

}

/* 📍 CURRENT LOCATION */
function getLocation(){
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(showPosition);
}else{
alert("Geolocation not supported");
}
}

async function showPosition(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

let response = await fetch(url);
let data = await response.json();

showWeather(data);
}

/* 🌤 COMMON DISPLAY FUNCTION */
function showWeather(data){

let icon = data.weather[0].icon;

document.getElementById("result").innerHTML = `
<h2>${data.name}</h2>
<img src="https://openweathermap.org/img/wn/${icon}@2x.png">
<p>🌡 ${data.main.temp} °C</p>
<p>${data.weather[0].main}</p>
`;

}

/* 🌤 SHOW WEATHER + ICON + BACKGROUND */
function showWeather(data){

let icon = data.weather[0].icon;
let weatherMain = data.weather[0].main.toLowerCase();

document.getElementById("result").innerHTML = `
<h2>${data.name}</h2>
<img src="https://openweathermap.org/img/wn/${icon}@2x.png">
<p>🌡 ${data.main.temp} °C</p>
<p>${data.weather[0].main}</p>
`;

/* 🎨 CHANGE BACKGROUND */
changeBackground(weatherMain);

}

/* 🎨 LIVE BACKGROUND CHANGE */
function changeBackground(weather){

let box = document.querySelector(".weather-box");

if(weather.includes("clear")){
box.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
}

else if(weather.includes("cloud")){
box.style.background = "linear-gradient(135deg, #757f9a, #d7dde8)";
}

else if(weather.includes("rain")){
box.style.background = "linear-gradient(135deg, #2c3e50, #4ca1af)";
}

else if(weather.includes("snow")){
box.style.background = "linear-gradient(135deg, #e6dada, #274046)";
}

else{
box.style.background = "#ffffff";
}

}