import React from 'react';
import './App.css';

const api = {
  key: '000296d04e4649a4ab729bf396b3b169',
  base: 'https://api.openweathermap.org/data/2.5/'
}


function App() {
  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `Today is ${day}, ${month} ${date}, ${year}.`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div>
          <div className='location-box'>
            <div className='location'>New York City, US</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              15 F
            </div>
            <div className='weather'>Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
