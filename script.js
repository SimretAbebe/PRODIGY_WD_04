const apikey = "ca7f1d93176e2d4a6dae646c38f816a8";
const url = "https://api.openweathermap.org/data/2.5/weather";



const inputBox = document.getElementById("input-box");
const button = document.getElementById("btn");
const weatherBody = document.getElementById("weather-body");

button.addEventListener("click", () => {
  const city = inputBox.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});


function fetchWeather (city) {
     const urls = `${url}?q=${city}&appid=${apikey}&units=metric`;

      fetch(urls)
        .then((res) => res.json())
        .then((data) => showWeather(data))
        .catch((error) => console.log("Error fetching weather:", error));

}

function showWeather(data) {
  if (data.cod === "404") {
    alert("City not found. Try again.");
    return;
  }

  weatherBody.style.display = "block";
  weatherBody.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${Math.round(data.main.temp)}°C</p>
    <p>Condition: ${data.weather[0].main}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} km/h</p>
  `; }