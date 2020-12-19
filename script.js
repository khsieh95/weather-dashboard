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
    .text("Temperature: " + response.main.temp);
  cityName.append(cityImg);

  var cityWind = $("<p>")
    .addClass("card-text")
    .text("Wind: " + response.wind.speed + "MPH");
  var cityHumid = $("<p>")
    .addClass("card-text")
    .text("Humidity: " + response.main.humidity + "%");

  currentWeatherBody.append(cityName, cityTemp, cityWind, cityHumid);
  currentWeather.append(currentWeatherBody);
  $("#current-display").append(currentWeather);
});

//   QueryURL for UV index API
var queryURL2 =
  "https://api.openweathermap.org/data/2.5/uvi?lat=47.6062&lon=122.3321&appid=" +
  ApiKey;
$.ajax({
  url: queryURL2,
  method: "GET",
}).then(function (response) {
  var cityUV = $("<p>")
    .addClass("card-text")
    .text("UV Index: " + response.value);
  console.log(response);
  $(".card-body").append(cityUV);
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
