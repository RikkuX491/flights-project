import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header";
import NavBar from "./NavBar";

function App() {

  const [flights, setFlights] = useState([])

  useEffect(retrieveFlights, [])

  function retrieveFlights(){
    fetch('http://localhost:4000/flights')
    .then(response => response.json())
    .then(setFlights)
  }

  function addFlight(newFlight){
    setFlights([...flights, newFlight])
  }

  return (
    <div className="app">
      <NavBar/>
      <Header/>
      <Outlet context={
        {
          flights: flights,
          addFlight: addFlight
        }
      }/>
    </div>
  );
}

export default App;
