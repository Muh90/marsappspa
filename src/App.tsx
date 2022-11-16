import React from 'react';
import './App.css';
import Nasa from "./nasa_page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Nasa}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
