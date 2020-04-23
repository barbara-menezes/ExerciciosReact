import React from 'react';
import './App.css';
import DogDetails from './components/DogDetails/DogDetails';
import Swal from 'sweetalert2';
import Dog from "./images/dog.jpg";
import CreateBeerForm from './components/CreateBeerForm/CreateBeerForm'
//import CreateBeerFormikForm from './components/CreateBeerFormikForm/CreateBeerFormikForm';
//import logo from './logo.svg';

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
        <CreateBeerForm />
      </header>
    </div>
  );
}

export default App;
