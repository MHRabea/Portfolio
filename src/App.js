import React  from "react";
import Navbar from "./components/nav";
import Brief from "./components/breif"; 
import About from "./components/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";



function App() {

  return (
    <div className="flex flex-col justify-center items-center">
     <Navbar />
     <Brief />
     <About />
     <Portfolio />
     <Contact />
     <Footer />
     </div>
  );
}

export default App;
