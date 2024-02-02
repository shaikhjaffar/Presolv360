
import { NavLink, a} from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/Images/logo.png';
import { useLayoutEffect } from 'react'
import Hamburger from "../../components/HamburgerMenu";
import EnquiryModal from "../../components/EnquiryModal";
import LoginDropdown from "../../components/LoginDropdown";
 export default  function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false);
  const { pathname } = useLocation();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
   
//   gsap.registerPlugin(ScrollTrigger);
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//         ScrollTrigger.create({
//             trigger: ".navbar",
//             pin: true,
//             id:"nabavr",
//             start: "0 0",
//             markers:true,
//             end:""
//         });
//     })
//     return () => ctx.revert()
// })


  return (
    <nav className="navbar" id="nav">
         <Hamburger/>
      <div className="container">
        <div className="logo">
           <img src={Logo} alt="logo"/>
        </div>
     
        <div className={`nav-elements ${showNavbar}`}>
          <ul>
          <li onClick={handleShowNavbar}>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li onClick={handleShowNavbar}>
              <NavLink  exact  to="/About_us">About</NavLink>
            </li>
            <li className="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Solutions</a>
    <div className="dropdown-content">
    <NavLink exact onClick={handleShowNavbar}  to="/OurOffering/negotiation">Negotiation</NavLink>
    <NavLink exact onClick={handleShowNavbar}  to="/OurOffering/mediation">Mediation</NavLink>
    <NavLink exact  onClick={handleShowNavbar} to="/OurOffering/arbitration">Arbitration</NavLink>
    </div>
  </li>
  <li className="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Resources</a>
    <div className="dropdown-content">
    <NavLink exact onClick={handleShowNavbar}  to="https://presolv360.com/dispute_resolution_clause">Clause</NavLink>
    <NavLink exact  onClick={handleShowNavbar} to="/caseAlert">Case Alert</NavLink>
    <NavLink exact onClick={handleShowNavbar}  to="/blog">Blog</NavLink>
    <NavLink exact onClick={handleShowNavbar}  to="/odrTv">ODR TV</NavLink>
    <NavLink exact  onClick={handleShowNavbar} to="/researchPaper">Research Papers</NavLink>
    <NavLink exact onClick={handleShowNavbar}  to="/podcast"> ODR on Air</NavLink>
    <NavLink exact onClick={handleShowNavbar}  to="https://presolv360.com/chat360">Chat360</NavLink>
    <NavLink exact  onClick={handleShowNavbar} to="/impression">Impressions</NavLink>
    <NavLink exact  onClick={handleShowNavbar} to="/globallySpeaking">Globally Speaking</NavLink>
    </div>
  </li>
    
            <li onClick={handleShowNavbar}>
              <NavLink exact  to="/Career">Careers</NavLink>
            </li>
      
          </ul>
         
        
        </div>
        <div className="navbtn_grp">
          <div id="nav_enq_btn" 
          
          
          style={{visibility:`${pathname !== "/" ? 'visible' : 'hidden'}`}}
          >
          <EnquiryModal/>
        </div>
        
        <LoginDropdown/>

          </div>
      </div>
      
    </nav>
  );
};