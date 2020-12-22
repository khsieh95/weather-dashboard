// console.log("linked");
// Step 1: Search button, taking in city input(console log)
// Step 2: Get working API key

// Global Variables
var searchBtn = $("#searchBtn");
var ApiKey = "70b8914b760b61aadf8e4a8421d53345";

searchBtn.on("click", function (event) {
  event.preventDefault();
  $("#current-display").empty();
  $("#future-weather-row").empty();
  var userInput = $("#userCity").val();
  console.log(userInput);

  // QueryURL for first weather API
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    userInput +
    "&appid=" +
    ApiKey +
    "&units=imperial";

  //   AJAX function to get City Name, Temp, Wind, Humidity, UV index;
  function getWeather() {
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        var longEl = data.coord.lon;
        var latEl = data.coord.lat;

        var currentWeather = $("<div>").addClass("card");
        var currentWeatherBody = $("<div>").addClass("card-body");
        var cityName = $("<h1>").addClass("card-text").text(data.name);
        var cityImg = $("<img>").attr(
          "src",
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );
        cityName.append(cityImg);

        var cityTemp = $("<p>")
          .addClass("card-text")
          .text("Temperature: " + data.main.temp + " F");

        var cityWind = $("<p>")
          .addClass("card-text")
          .text("Wind: " + data.wind.speed + " MPH");
        var cityHumid = $("<p>")
          .addClass("card-text")
          .text("Humidity: " + data.main.humidity + "%");

        currentWeatherBody.append(cityName, cityTemp, cityWind, cityHumid);
        currentWeather.append(currentWeatherBody);
        $("#current-display").append(currentWeather);
        getUvIndex(latEl, longEl);
      });
  }

  function getUvIndex(lat, lon) {
    fetch(
      "http://api.openweathermap.org/data/2.5/uvi?appid=" +
        ApiKey +
        "&lat=" +
        lat +
        "&lon=" +
        lon
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var uvIndex = data.value;

        //   Add content to card body for UV index
        var cityUV = $("<p>").addClass("card-text").text("UV Index: ");
        $(".card-body").append(cityUV);
        var uvSpan = $("<span>").addClass("uv-span");
        uvSpan.append(uvIndex);
        cityUV.append(uvSpan);

        // Change color of background regarding UV index
        if (uvIndex < 3) {
          uvSpan.attr("style", "background-color: green;");
        } else if (uvIndex < 6) {
          uvSpan.attr("style", "background-color: yellow;");
        } else if (uvIndex < 8) {
          uvSpan.attr("style", "background-color: orange;");
        } else if (uvIndex < 11) {
          uvSpan.attr("style", "background-color: red;");
        } else {
          uvSpan.attr("style", "background-color: violet;");
        }
      });
  }

  // Query URL for 5 day forecast
  var queryURL3 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    userInput +
    "&appid=" +
    ApiKey +
    "&units=imperial";
  $.ajax({
    url: queryURL3,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var forecastHeader = $("<h2>").text("5-Day Forecast");
    $("#future-weather-row").append(forecastHeader);
    for (i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.indexOf("12:00:00") !== -1) {
        var forecastCard = $("<div>").addClass("card");
        var forecastBody = $("<div>").addClass("forecastcard-body");
        var forecastDate = $("<p>")
          .addClass("card")
          .text(response.list[i].dt_txt);
        var forecastImg = $("<img>").attr(
          "src",
          "http://openweathermap.org/img/w/" +
            response.list[i].weather[0].icon +
            ".png"
        );
        var forecastTemp = $("<p>")
          .addClass("forecastcard-text")
          .text("Temp: " + response.list[i].main.temp + " F");
        var forecastHumid = $("<p>")
          .addClass("forecastcard-text")
          .text("Humidity: " + response.list[i].main.humidity + "%");
        var forecastCol = $("<div>").addClass("col-md-2");
        forecastBody.append(
          forecastDate,
          forecastImg,
          forecastTemp,
          forecastHumid
        );
        forecastCard.append(forecastBody);
        forecastCol.append(forecastCard);
        $("#future-weather-row").append(forecastCol);
      }
    }
  });

  // ****Note: make a form in html: DONE

  getWeather();
});
