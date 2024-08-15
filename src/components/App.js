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

  function addFlight(newFlight){
    fetch("http://localhost:7000/flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newFlight)
    })
    .then(response => response.json())
    .then(newFlightData => setFlights([...flights, newFlightData]))
  }

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Outlet context={{flights: flights, addFlight: addFlight}}/>
    </div>
  );
}

export default App;
