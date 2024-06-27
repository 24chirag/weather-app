const url = "https://yahoo-weather5.p.rapidapi.com/weather?location=";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e6bff7a7e1msh9fb0d801680dc77p1fc70djsn5faebad3c516",
    "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
  },
};
function getweather(city) {
  fetch(url + city + "&format=json&u=f", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("city").innerHTML = response.location.city;
      document.getElementById("temperature").innerHTML =
        response.current_observation.condition.temperature;
      document.getElementById("sunrise").innerHTML =
        response.current_observation.astronomy.sunrise;
      document.getElementById("sunset").innerHTML =
        response.current_observation.astronomy.sunset;
      document.getElementById("pressure").innerHTML =
        response.current_observation.atmosphere.pressure;
      document.getElementById("humidity").innerHTML =
        response.current_observation.atmosphere.humidity;
      document.getElementById("time").innerHTML = response.location.timezone_id;
      document.getElementById("country").innerHTML = response.location.country;
      document.getElementById("lat").innerHTML = response.location.lat;
      document.getElementById("long").innerHTML = response.location.long;
    })
    .catch((err) => console.error(err));
}

// let submitButton = document.getElementById("city1").value;
// console.log(submitButton);
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   getweather(city1.value);
// });
