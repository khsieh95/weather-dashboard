# weather-dashboard

![Screen Shot 2020-12-22 at 5 01 45 PM (2)](https://user-images.githubusercontent.com/74025123/102947186-9a922c80-4477-11eb-97f7-5a18b7815c8b.png)

Deployment Link: https://khsieh95.github.io/weather-dashboard/

# Summary

Created a weather app, that is designed to take the user's input (city) and display its current weather (temperature, humidity, wind, and UV index), as well as its forecast for the next 5 days. The content displayed will update upon entering in a new city name.

## Behind the scenes and features

- Multiple APIs were used. 1 for the current weather, 1 for the UV index, and 1 for the forecast.
  - The UV index takes into account latitude and longitude, which is referenced in the current weather API.
- An image/icon is provided to display the current weather and update upon refresh or new search.
- The color of the span on the UV index, is set to change in regards to the UV value (tested by hard coding my location to Hawaii and other locations).
- Under the search button and clear button, you will see past cities that were searched, which are pulled and stored locally.
- Clear button works to clear the entire page as well as local storage

### What I could do

- Try to make the history buttons functional
