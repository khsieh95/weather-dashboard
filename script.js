// console.log("linked");
// Step 1: Search button, taking in city input(console log)
// Step 2: Get working API key

// Global Variables
var currentDate = moment().format("MMM Do YY");
var searchBtn = $("#searchBtn");
var ApiKey = "70b8914b760b61aadf8e4a8421d53345";
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
  currentWeather.append(cityName, cityTemp, cityWind, cityHumid);
  $("#current-display").append(currentWeather);
});

// ****Note: make a form in html: DONE
// searchBtn.on("click", function (event) {
//   event.preventDefault;
//   var userInput = $("#userCity").val();
//   console.log(userInput);
// });
