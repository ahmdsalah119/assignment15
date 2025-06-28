var allweather =[];
var apiKey = "5cbcac666e1c4e3794c160752252806";
var weatherItem = document.querySelector('#weatherItem');
var search = document.querySelector('#form');

function getWeather(){
var myHttp = new XMLHttpRequest();
myHttp.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`);
myHttp.send();
myHttp.addEventListener("load", function() {
allweather = JSON.parse(myHttp.response);
})
myHttp.addEventListener("error", function() {
    alert("Error fetching weather data");
})



search.addEventListener('submit', function (e) {
  e.preventDefault();
  var city = document.querySelector('#searchInput').value;

      if (city) {
        getWeather(city);
      }
    });
 
        weatherItem.innerHTML = "";

        for (var i=0;i<day.length;i++) {
            var day = days[i];
            var date = new (day.date).toDateString();
    
          weatherItem.innerHTML +=`
            <div class="col-md-4">
              <div class="card p-4 text-white text-center h-100">
                <h4>${date}</h4>
                <p class="text-white-50 mb-1">${day.date}</p>
                <h2 class="temp">${day.day.maxtemp_c}°C</h2>
                <p class="text-info">${day.day.condition.text}</p>
                <img src="https:${day.day.condition.icon}" alt="icon" class="mb-2" />
                <p>Humidity: ${day.day.avghumidity}%</p>
                <p>Wind: ${day.day.maxwind_kph} km/h</p>
                <p class="text-white-50">City: ${cityName}</p>
              </div>
              </div>`;
        }
    };
 
 getWeather('lon');