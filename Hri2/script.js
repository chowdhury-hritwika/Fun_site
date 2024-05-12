// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1215689d56mshcc5df82180a5bb7p153414jsn4b9913941560',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city) =>{
	cityname.innerHTML = city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cloud_pct.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = new Date(response.sunrise * 1000).toTimeString();
    sunset.innerHTML = new Date(response.sunset * 1000).toTimeString();
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    // cloud_pctid.innerHTML = response.cloud_pct;
    // feels_likeid.innerHTML = response.feels_like;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault() //cant reload the page
	getWeather(city.value)
})

getWeather("Delhi")

getWeather1 = () =>{
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
  options
) .then((response) => response.json())
.then((response) => {
  // cloud_pctid.innerHTML = response.cloud_pct
  feels_likeid.innerHTML = response.feels_like
  humidityid.innerHTML = response.humidity
  max_tempid.innerHTML = response.max_temp
  min_tempid.innerHTML = response.min_temp
  sunriseid.innerHTML = new Date(response.sunrise * 1000).toLocaleString()
  sunsetid.innerHTML = new Date(response.sunset * 1000).toLocaleString()
  tempid.innerHTML = response.temp
  wind_degreesid.innerHTML = response.wind_degrees
  wind_speedid.innerHTML = response.wind_speed
  
}).catch((err) => console.error(err));
}
getWeather2 = () =>{
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
  options
) .then((response) => response.json())
.then((response) => {
  // cloud_pctid.innerHTML = response.cloud_pct
  feels_likeid1.innerHTML = response.feels_like
  humidityid1.innerHTML = response.humidity
  max_tempid1.innerHTML = response.max_temp
  min_tempid1.innerHTML = response.min_temp
  sunriseid1.innerHTML = response.sunrise = new Date(response.sunrise * 1000).toLocaleString()
  sunsetid1.innerHTML = response.sunset = new Date(response.sunset * 1000).toLocaleString()
  tempid1.innerHTML = response.temp
  wind_degreesid1.innerHTML = response.wind_degrees
  wind_speedid1.innerHTML = response.wind_speed
  
}).catch((err) => console.error(err));
}
getWeather3 = () =>{
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow",
  options
) .then((response) => response.json())
.then((response) => {
  // cloud_pctid.innerHTML = response.cloud_pct
  feels_likeid2.innerHTML = response.feels_like
  humidityid2.innerHTML = response.humidity
  max_tempid2.innerHTML = response.max_temp
  min_tempid2.innerHTML = response.min_temp
  sunriseid2.innerHTML = response.sunrise = new Date(response.sunrise * 1000).toLocaleString()
  sunsetid2.innerHTML = response.sunset = new Date(response.sunset * 1000).toLocaleString()
  tempid2.innerHTML = response.temp
  wind_degreesid2.innerHTML = response.wind_degrees
  wind_speedid2.innerHTML = response.wind_speed
  
}).catch((err) => console.error(err));
}
getWeather4 = () =>{
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
  options
) .then((response) => response.json())
.then((response) => {
  // cloud_pctid.innerHTML = response.cloud_pct
  feels_likeid3.innerHTML = response.feels_like
  humidityid3.innerHTML = response.humidity
  max_tempid3.innerHTML = response.max_temp
  min_tempid3.innerHTML = response.min_temp
  sunriseid3.innerHTML = response.sunrise = new Date(response.sunrise * 1000).toLocaleString()
  sunsetid3.innerHTML = response.sunset = new Date(response.sunset * 1000).toLocaleString()
  tempid3.innerHTML = response.temp
  wind_degreesid3.innerHTML = response.wind_degrees
  wind_speedid3.innerHTML = response.wind_speed
  console.log(response)
}).catch((err) => console.error(err));
}



getWeather1()
getWeather2()
getWeather3()
getWeather4()