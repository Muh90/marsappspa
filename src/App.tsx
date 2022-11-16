import React, {useState} from 'react';
import './App.css';
import Nasa from "./nasa_page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nasa/>
        <ButtonClicks/>
      </header>
    </div>
  );
}

type ButtonClicksProps = {}

const ButtonClicks: React.FC<ButtonClicksProps> = ({}) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button type="button" onClick={() => setCount((count + 1))}>Clicked {count} times</button>
        </div>
    );
}

export default App;
