// console.log("linked");
// Step 1: Search button, taking in city input

// Global Variables
var currentDate = moment().format("MMM Do YY");
var searchBtn = $("#searchBtn");

// ****Note: make a form in html
searchBtn.on("click", function (event) {
  event.preventDefault;
  var userInput = $("#userCity").val();
  console.log(userInput);
});
