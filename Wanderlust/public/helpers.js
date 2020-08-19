const createVenueHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
    <img class="venueimage" src="${iconSource}"/>
    <h3>Address:</h3>
    <p class="venueparag">${location.address}</p>
    <p class="venueparag">${location.city}</p>
    <p class="venueparag">${location.country}</p>`;
  }
  
  const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>
          <img class="weathericon" src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
  }
  
  const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);