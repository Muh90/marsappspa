import React from 'react';
import './App.css';
import Nasa from "./nasa_page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nasa/>
        <button type="button">Click</button>
      </header>
    </div>
  );
}

type InfoProps = {
    title: string;
    p1: string;
}

const Info: React.FC<InfoProps> = ({
   title,
   p1
}) => {
    return (
        <body>
        <h1>{title}</h1>
        <p>{p1}</p>
        </body>
    );
}

export default App;
