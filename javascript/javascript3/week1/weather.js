const user_city = document.getElementById("city")
const weather_button = document.getElementById("button")
const h2 = document.getElementById("location");
const h1 = document.getElementById("temp")
const weathericon = document.getElementById("icon")
const windspeed = document.getElementById("wind");
const cloudyness = document.getElementById("cloudy")
const sunRise = document.getElementById("sunrise");
const sunSet = document.getElementById("sunset")
const locationButton = document.getElementById("locationbutton")
let url;

function getWeather() {
    fetch(url)
        .then(response => response.json())
        .then(weatherinfo => {
            console.log(weatherinfo)
            h2.innerText = `Location : ${weatherinfo.name}`;
            h1.innerText = `Current Temperature ${weatherinfo.main.temp} °C`;
            weathericon.src = `http://openweathermap.org/img/wn/${weatherinfo.weather[0].icon}@2x.png`;
            windspeed.innerText = `Wind Speed : ${weatherinfo.wind.speed} km/s`;
            cloudyness.innerText = `clouds : ${weatherinfo.weather[0].description}`;
            const sunRiseSec = (weatherinfo.sys.sunrise * 1000);
            const sunSetSec = (weatherinfo.sys.sunset * 1000);
            const sunRiseDate = new Date(sunRiseSec)
            const sunSetDate = new Date(sunSetSec)
            sunRise.innerText = `Sunrise : ${sunRiseDate.toLocaleTimeString()}`;
            sunSet.innerText = `Sunset : ${sunSetDate.toLocaleTimeString()}`;

            //for map    
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: weatherinfo.coord.lat, lng: weatherinfo.coord.lon },
                //    center: { lat: 55.655989899999994, lng: 12.4719763 },
                zoom: 10,
            });

        })

}
//weather search by using city name
function getWeatherFromCity() {
    const cityname = user_city.value;
    if (cityname != "") {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=87767968eab32755fe7fe84b6afae600`
        getWeather()
    } else {
        document.getElementById("reset").innerHTML = "";
        const h2 = document.createElement("h2")
        document.body.appendChild(h2)
        h2.textContent = "Please enter city name";
    }
}
//weather from using location
function geoLocation() {
    const successCallback = (position) => {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("langitude", position.coords.longitude);
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=87767968eab32755fe7fe84b6afae600`;

        getWeather();
    }
    const errorCallback = (error) => {
        console.error(error);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

    } else {
        console.log("Geolocation is not supported by your browser");
    }

}
//weather from using location in localstorage 

function getlocalStorage() {

    const latitude = localStorage.getItem("latitude")
    const longitude = localStorage.getItem("langitude")
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=87767968eab32755fe7fe84b6afae600`;
    getWeather();

}

weather_button.addEventListener("click", getWeatherFromCity)
locationButton.addEventListener("click", geoLocation)
window.addEventListener('load', getlocalStorage)






