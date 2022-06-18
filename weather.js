let now = new Date();

let date = new Date().getDate();
console.log(date);
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let hours = new Date().getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

console.log(hours);
let minutes = new Date().getMinutes();
console.log(minutes);
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${Math.round(response.data.main.temp)}`;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humdityElement = document.querySelector("#humidity");
  humdityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

function search(event) {
  event.preventDefault();
  let apiKey = "549c7217fb9eacf1397e35a4b8250db9";
  let city = document.querySelector("#city-input").value;
  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
