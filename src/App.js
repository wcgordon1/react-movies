import React from 'react';
import './App.css';

const api = {
  key: '000296d04e4649a4ab729bf396b3b169',
  base: 'https://api.openweathermap.org/data/2.5/'
}


function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
