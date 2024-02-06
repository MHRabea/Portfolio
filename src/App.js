import React  from "react";
import Navbar from "./components/nav";
import Brief from "./components/breif"; 
import About from "./components/about";
import Portfolio from "./components/portfolio/portfolio";



function App() {

  return (
    <div className="flex flex-col justify-center items-center">
     <Navbar />
     <Brief />
     <About />
     <Portfolio />
     </div>
  );
}

export default App;
