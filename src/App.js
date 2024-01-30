import React ,{useState , useEffect} from "react";
import Navbar from "./components/nav";
import Brief from "./components/breif"; 
import About from "./components/about";
import Portfolio from "./components/portfolio";



function App() {
   
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

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
