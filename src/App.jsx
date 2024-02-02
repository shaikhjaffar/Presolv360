import Navbar from "./Section/navbar/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Career from "./pages/Career";
import ResourceCenter from "./pages/resourceCenter";
import Home from "./pages/Home";
import '../src/assets/styles/Resource.css'
import About from "./pages/AboutPage";
import Footer from "./Section/Footer";
import './assets/styles/AboutPage.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Negotiation from "./pages/OurOffering/Negotiation";
import Mediation from "./pages/OurOffering/Mediation";
import Arbitration from "./pages/OurOffering/Arbitration";
import Reveal from "./utils/Reveal";
import ScrollToTop from "./components/ScrollToTop";
import Podcast from "./pages/Resources/Podcast";
import OdrTv from "./pages/Resources/OdrTv";
function App() {
  return (
    <>
   <ScrollToTop/>
    <div className="main">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/impression" element={<ResourceCenter />} />
        <Route path="/OurOffering/negotiation" element={<Negotiation />} />
        <Route path="/OurOffering/mediation" element={<Mediation />} />
        <Route path="/OurOffering/arbitration" element={<Arbitration />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/odrTv" element={<OdrTv/>} />
        <Route path="/About_us" element={<About />} />
      </Routes>
      <Footer/>
     

    </div>
    </>
  );
}

export default App;
