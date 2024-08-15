import logo from '../logo.svg';
import '../App.css';

import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import NavBar from './NavBar';
import Header from './Header';

function App() {

  const [flights, setFlights] = useState([])

  useEffect(() => {
    fetch("http://localhost:7000/flights")
    .then(response => response.json())
    .then(flightsData => setFlights(flightsData))
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Outlet context={{flights: flights}}/>
    </div>
  );
}

export default App;
