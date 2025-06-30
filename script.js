const options = {
    method: 'GET'
}

const getweather = (city) => {
    fetch('http://api.weatherapi.com/v1/current.json?key=9ac2200c6d594ca0b53162940252806&q=' + city + '&aqi=yes', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.current.temp_c
            text.innerHTML = response.current.condition.text
            feelslike.innerHTML = response.current.feelslike_c
            name1.innerHTML = response.location.name
            cntry.innerHTML = response.location.country
            humidity.innerHTML = response.current.humidity
            wind.innerHTML = response.current.wind_kph
            dew.innerHTML = response.current.dewpoint_c
            press.innerHTML = response.current.pressure_mb
            visi.innerHTML = response.current.vis_km
            uv.innerHTML = response.current.uv
            co.innerHTML = response.current.air_quality.co
            o3.innerHTML = response.current.air_quality.o3
            so2.innerHTML = response.current.air_quality.so2
            no2.innerHTML = response.current.air_quality.no2
            pm2_5.innerHTML = response.current.air_quality.pm2_5
            pm5.innerHTML = response.current.air_quality.pm10
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value);
});

getweather("New Delhi");

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
