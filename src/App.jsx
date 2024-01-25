import Navbar from "./Section/navbar/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Career from "./pages/Career";
import ResourceCenter from "./pages/resourceCenter";
import Home from "./pages/Home";
import OurOffering from "./pages/ourOffering";
import About from "./pages/AboutPage";
import Footer from "./Section/Footer";
import './assets/styles/AboutPage.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
function App() {
  
     window.addEventListener('scroll',()=>{
       const element =   document.getElementById('nav')
       element.style.backgroundColor="#fff" 
       element.style.backgroundImage="none"
     })
  
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/ResourceCenter" element={<ResourceCenter />} />
        <Route path="/OurOffering/negotiation" element={<OurOffering />} />
        <Route path="/OurOffering/mediation" element={<OurOffering />} />
        <Route path="/OurOffering/arbitration" element={<OurOffering />} />
        <Route path="/About_us" element={<About />} />
      </Routes>
      <Footer/>
     

    </div>
  );
}

export default App;
