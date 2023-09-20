import './App.css'; 
import clear from './components/assets/clear.png';
import cloud from './components/assets/cloud.png';
import drizzle from './components/assets/drizzle.png';
import humidity from './components/assets/humidity.png';
import rain from './components/assets/rain.png';
import snow from './components/assets/snow.png';
import wind from './components/assets/wind.png';
import { useState } from 'react';
import clearSky from './components/backSkys/clearSky.jpg';
import cloudySky from './components/backSkys/cloudySky.jpg';
import drizzleSky from './components/backSkys/drizzleSky.jpg';
import rainSky from './components/backSkys/rainSky.gif';
import snowSky from './components/backSkys/snowSky.gif';
function App() {

  const [Icon,setIcon] = useState(cloud);
  const [Back,setBack] = useState(cloudySky);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].val === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=1d3d13442dbc270d3b0fed054db0d43c`

    let response = await fetch(url);
    let data = await response.json();

    const temperature = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("location");
    const humidity = document.getElementsByClassName("humi-value");
    const wind = document.getElementsByClassName("wind-value");
    const longi = document.getElementsByClassName("longi");
    const lati = document.getElementsByClassName("lati");

    temperature[0].innerHTML = Math.floor((data.main.temp - 273));
    location[0].innerHTML = data.name;
    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    longi[0].innerHTML = (data.coord.lon);
    lati[0].innerHTML = (data.coord.lat);


    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setIcon(clear);
      setBack(clearSky);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setIcon(cloud);
      setBack(cloudySky);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setIcon(drizzle);
      setBack(drizzleSky);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setIcon(drizzle);
      setBack(drizzleSky);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setIcon(rain);
      setBack(rainSky);
    }
    else if(data.weather[0].icon==="010d" || data.weather[0].icon==="010n")
    {
      setIcon(rain);
      setBack(rainSky);
    }
    else if(data.weather[0].icon==="013d" || data.weather[0].icon==="013n")
    {
      setIcon(snow);
      setBack(snowSky);
    }
    else{
      setIcon(clear);
      setBack(clearSky);
    }
  }

  return (
    <div className='bodyy' >
      <img className=" background-img" src={Back} alt="" /> 

  
    <div className='container'>
      <h1 className='title'>Ready to Explore</h1>
      <div className='box'>
        <input type="text" className="cityInput" placeholder="Enter city name " />
        <button type='submit' onClick={() => { search() }}>Search</button>
      </div>
      <div className="weathers">
        <img src={Icon} alt="" />
      </div>
        <div className="temp">24</div>
        <div className='location'>Meerut</div>
        <div>
        <span className='longi'>00</span>
        <span>,</span>
        <span className='lati'>00</span>
        </div>

        <div className='elements'>
          <div className='humi'>
            <img src={humidity} alt="" />
            <h2 className='humi-value'>23</h2>
          </div>
          <div className='windi'>
            <img src={wind} alt="" />
            <h2 className='wind-value'>24</h2>
          </div>
        </div>

    </div>
    </div>
  );
}

export default App;
