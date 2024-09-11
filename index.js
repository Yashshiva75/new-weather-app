const input = document.querySelector('.input')
const btn = document.querySelector('#btn')
const img = document.querySelector('.weather_img')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const hum = document.querySelector('#humidity-sp')
const wind = document.querySelector('#wind-sp')
const error = document.querySelector('.error')
const body = document.querySelector('.body');

async function checkweather(city) {
    const api_key = "820e2986889eabdf95aaf6227687935b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then((data) =>
        data.json());
    if (weather_data.cod === `404`) {
        error.style.display = "flex";
        body.style.display = "none";
        return;
    }

    error.style.display = "none";
    body.style.display = "flex";
    temp.innerHTML = `${Math.round(weather_data.main.temp -273.15)}ºC`;
    desc.innerHTML = `${weather_data.weather[0].description}`
    hum.innerHTML = `${weather_data.main.humidity}ºC`
    wind.innerHTML = `${weather_data.wind.speed}KMH`


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            img.src = 'img/cloud.png'
            break;
        case 'Clear':
            img.src = 'img/clear.png'
            break;
        case 'Mist':
            img.src = 'img/mist.png'
            break;
        case 'Snow':
            img.src = 'img/snow.png'
            break;
        case 'Rain':
            img.src = 'img/rain.png'
            break;
    }


}

btn.addEventListener('click', () => {
    checkweather(input.value)
})