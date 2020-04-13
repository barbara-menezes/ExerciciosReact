import React from 'react';
import './App.css';
import DogDetails from './components/DogDetails';
import logo from './logo.svg';
import Swal from 'sweetalert2';
import Dog from "./images/dog.jpg";

var onBark = () => {
  Swal.fire("Woof! Woof!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <button id="buttonAlert" onClick={() => {Swal.fire("This is the alert!")}}>Click Here</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning
        </a> */}
        <DogDetails name="Mylon" imagePath={Dog} onBarkButton={onBark}/>
      </header>
    </div>
  );
}

export default App;
