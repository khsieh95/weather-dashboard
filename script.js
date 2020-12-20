// console.log("linked");
// Step 1: Search button, taking in city input(console log)
// Step 2: Get working API key

// Global Variables
var currentDate = moment().format("MMM Do YY");
var searchBtn = $("#searchBtn");
var ApiKey = "70b8914b760b61aadf8e4a8421d53345";

// QueryURL for first weather API
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=" +
  ApiKey +
  "&units=imperial";

//   AJAX function to get City Name, Temp, Wind, Humidity, UV index;
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  var currentWeather = $("<div>").addClass("card");
  var currentWeatherBody = $("<div>").addClass("card-body");
  var cityName = $("<h1>").addClass("card-text").text(response.name);
  var cityImg = $("<img>").attr(
    "src",
    "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
  );

  var cityTemp = $("<p>")
    .addClass("card-text")
    .text("Temperature: " + response.main.temp + " F");
  cityName.append(cityImg);

  var cityWind = $("<p>")
    .addClass("card-text")
    .text("Wind: " + response.wind.speed + " MPH");
  var cityHumid = $("<p>")
    .addClass("card-text")
    .text("Humidity: " + response.main.humidity + "%");

  currentWeatherBody.append(cityName, cityTemp, cityWind, cityHumid);
  currentWeather.append(currentWeatherBody);
  $("#current-display").append(currentWeather);
});

//   QueryURL for UV index API
var queryURL2 =
  "https://api.openweathermap.org/data/2.5/uvi?lat=21.3069&lon=157.8583&appid=" +
  ApiKey;
$.ajax({
  url: queryURL2,
  method: "GET",
}).then(function (response) {
  var uvIndex = response.value;

  //   Add content to card body for UV index
  var cityUV = $("<p>").addClass("card-text").text("UV Index: ");
  $(".card-body").append(cityUV);
  var uvDiv = $("<span>").addClass("uv-span");
  uvDiv.append(uvIndex);
  cityUV.append(uvDiv);
  // Change color of background regarding UV index
  if (uvDiv.val() > 3) {
    uvDiv.attr("style", "background-color: green;");
  } else if (uvDiv.val() < 3) {
    uvDiv.attr("style", "background-color: yellow;");
  }
  //   if (uvDiv > 6 < 8) {
  //     uvDiv.attr("style", "background-color: orange;");
  //   }
  //   if (uvDiv > 8 < 11) {
  //     uvDiv.attr("style", "background-color: red;");
  //   } else {
  //     uvDiv.attr("style", "background-color: violet;");
  //   }
  console.log(response);
});

// Query URL for 5 day forecast
var queryURL3 =
  "https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=" +
  ApiKey +
  "&units=imperial";
$.ajax({
  url: queryURL3,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

// ****Note: make a form in html: DONE
// searchBtn.on("click", function (event) {
//   event.preventDefault;
//   var userInput = $("#userCity").val();
//   console.log(userInput);
// });
