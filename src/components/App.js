import { Outlet } from "react-router-dom";

import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
