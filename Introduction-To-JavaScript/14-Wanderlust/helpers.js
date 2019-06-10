const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
  return `<h2> High: ${currentDay.day.maxtemp_f} &#176;F</h2>
    <h2> Low: ${currentDay.day.mintemp_f} &#176;F</h2>
    <h3> Precipitation: ${currentDay.day.totalprecip_in} in</h3>
    <h3> Humidity: ${currentDay.day.avghumidity} %</h3>
    <h3> Wind: ${currentDay.day.maxwind_kph} km/h</h3>
    <img src="https://${currentDay.day.condition.icon}" class="weathericon" alt="${currentDay.day.condition.text}" />
    <h2>${weekDays[(new Date(currentDay.date)).getUTCDay()]}</h2>`;
}
