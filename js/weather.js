// use Openweathermap.org
const API_KEY = "cd89d16e96912bef46368bd76ede6aaa";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url) // url 호출
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weatherSpan");
      const city = document.querySelector("#citySpan");
      const weatherIconImg = document.querySelector("#weatherIcon");
      const weatherIcon = data.weather[0].icon;
      const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      city.innerText = data.name;
      weather.innerText = `${Math.round(data.main.temp)}℃`;
      weatherIconImg.src = weatherIconUrl;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
