document.addEventListener("DOMContentLoaded" , cityWeather)

function weatherDataFetch(city) {
    var key = "af78b67dd6b16d7d18e20153c2d8dfff";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=af78b67dd6b16d7d18e20153c2d8dfff")
        .then(function(resp) {
            return resp.json()
        }) //convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function () {
            //catch any errors
        });
}
function cityWeather(e) {
    weatherDataFetch("Tallinn");
}