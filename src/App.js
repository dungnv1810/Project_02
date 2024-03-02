import React from 'react';
import Navbar from './Components/Container/Navbar';
import Carousel from './Components/Container/Carousel';
import Jumbotron from './Components/Container/Jumbotron';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Carousel/>
      <Jumbotron/>
    </React.Fragment>
  );
}

export default App;
