const APIkey = '7b413e4bbf56b571f3c5feea14561f03'
const APIurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt-br&q='
const searchI = document.querySelector('input#itxt')
const searchB = document.querySelector('i#search_btn')
const weatherIcon = document.querySelector('#weather-img')
const card = document.querySelector('div#weather')
const footer = document.querySelector('div#footer')
async function checkWeather(city){
    card.style.display ='block'
    footer.style.display ='none'
    const response = await fetch(APIurl + city + `&appid=${APIkey}`)
    let data = await response.json()
    console.log(data)
    document.querySelector('#city').innerHTML = data.name
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector('#humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('#wind').innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src ='weather-app-img/images/clouds.png'
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src ='weather-app-img/images/clear.png'
    } else if(data.weather[0].main == 'Rain'){
        weatherIcon.src ='weather-app-img/images/rain.png'
    } else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src ='weather-app-img/images/drizzle.png'
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src ='weather-app-img/images/mist.png'
    } else{
        alert('insert a correctly country or city')
    }


}
searchB.addEventListener("click", () => {
    checkWeather(searchI.value)
    searchI.value =''
    searchI.focus()
})

