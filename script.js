


let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");



//Function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  //If input field is NOT empty
  else {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    //Clear the input field
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        // printing the values to the console bar 
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        var unixstamp1 = data.sys.sunrise;
        var unixstamp2 = data.sys.sunset;
        
        var date1= new Date(unixstamp1*1000);
        var date2 = new Date(unixstamp2*1000);
        
        var formattedtime1 = date1.toLocaleTimeString("en-US");
        var formattedtime2 = date2.toLocaleTimeString("en-US");
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">(${data.weather[0].description})</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}&#176;</h1>

        <h4>Feels Like : ${data.main.feels_like} &#176;</h4>
        <h4>Humidity : ${data.main.humidity}%</h4>     
         <h4>Pressure : ${data.main.pressure} mbar</h4>
        <h4>Wind Speed : ${(data.wind.speed)*3.6} kmph</h4>
        <h4>Wind Degree : ${data.wind.deg}&#176</h4>
        <div class="temp-container">
        <div>
            <h4 class="title">SUNRISE</h4>
            <h4 class="temp">${formattedtime1}&#176;</h4>
        </div>
        <div>
            <h4 class="title">SUNSET</h4>
            <h4 class="temp">${formattedtime2}&#176;</h4>
        </div>
    </div>

        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};



searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);





