import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header";
import NavBar from "./NavBar";

function App() {

  const [flights, setFlights] = useState([])

  console.log(flights)

  useEffect(retrieveFlights, [])

  function retrieveFlights(){
    fetch('http://localhost:4000/flights')
    .then(response => response.json())
    .then(setFlights)
  }

  return (
    <div className="app">
      <NavBar/>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
