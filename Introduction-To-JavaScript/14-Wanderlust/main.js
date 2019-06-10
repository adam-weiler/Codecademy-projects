// Foursquare API Info
const clientId = 'PE2OHYNPPL4TAUO4ZCJAPSAAZFVL25DXRVP4SCS1XD0W1XIQ';
const clientSecret = 'SJZLMS3OESKKI01IX02ASSERFG55PFRGAJMIFIPTJ442AFWL';
// const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const url = 'https://api.foursquare.com/v2/venues/explore?';

// APIXU Info
const apiKey = 'adcc6c4a646c403b994132657190806';
// const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Get current date.
today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //As January is 0.
var yyyy = (today.getFullYear()).toString();

if (dd<10) dd = ('0' + dd).toString(); //Adds 0 to start of string if needed.
if (mm<10) mm = ('0' + mm).toString(); //Adds 0 to start of string if needed.

let todayDate = yyyy + mm + dd;
// console.log(todayDate);


// Add AJAX functions here:
const getVenues = async () => {
	const city = $input.val();
  // const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${todayDate}`;
  const urlToFetch = `${url}client_id=${clientId}&client_secret=${clientSecret}&near=${city}&limit=10&v=${todayDate}`;
  // console.log(urlToFetch);
  try {
  	const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
  		console.log(jsonResponse);
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      // console.log(venues);
      return venues;
    }
  } catch (error) {
    	console.log(error);
  }
}


const getForecast = async () => {
  const city = $input.val();
  const urlToFetch = `${forecastUrl}key=${apiKey}&q=${city}&days=4&hour=11`;
  console.log(urlToFetch);
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      const days = jsonResponse.forecast.forecastday;
      // console.log(days);
      return days;
    }
  } catch (error) {
    	console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    // console.log(venue);
    const venueIcon = venue.categories[0].icon;
    // console.log(venueIcon);
    
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
      
    // let venueContent = `<h2>${venue.categories[0].name}</h2><img class="venueimage" src="${venueImgSrc}"/><h3>Address:</h3><p>${venue.location.address}</p><p>${venue.location.city}</p><p>${venue.location.country}</p>`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    // console.log(venueContent);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}



const renderForecast = (days) => {
  $weatherDivs.forEach(($day, index) => {
    // Add your code here:
    const currentDay = days[index];
    // console.log(currentDay);
    
    // const dayOfTheWeek = weekDays[(new Date(currentDay.date)).getUTCDay()];
        
    // let weatherContent = `<h2>High: ${currentDay.day.maxtemp_f} F</h2><h2>Low: ${currentDay.day.mintemp_f} F</h2><img src="${currentDay.day.condition.icon}" class="weathericon" /><h2>${dayOfTheWeek}</h2>`;
    let weatherContent = createWeatherHTML(currentDay)
    // console.log(weatherContent);
    $day.append(weatherContent);
  });
}


const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)
