
import { NavLink, a} from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from '../../assets/Images/logo.png';
import { useLayoutEffect } from 'react'
import Hamburger from "../../components/HamburgerMenu";
import EnquiryModal from "../../components/EnquiryModal";
import LoginDropdown from "../../components/LoginDropdown";
 export default  function Navbar () {
  const [showNavbar, setShowNavbar] = useState(false);

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
              <NavLink  exact  to="/About_us">About us</NavLink>
            </li>
            <li className="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Our Offering </a>
    <div className="dropdown-content">
    <NavLink exact onClick={handleShowNavbar}  to="/OurOffering/negotiation">Negotiation</NavLink>
    <NavLink exact onClick={handleShowNavbar}  to="/OurOffering/mediation">Mediation</NavLink>
    <NavLink exact  onClick={handleShowNavbar} to="/OurOffering/arbitration">Arbitration</NavLink>
    </div>
  </li>
            {/* <li onClick={handleShowNavbar}  >
              <NavLink exact  to="/ResourceCenter">Resource Center</NavLink>
            </li> */}
            <li onClick={handleShowNavbar}>
              <NavLink exact  to="/Career">Career</NavLink>
            </li>
      
          </ul>
         
        
        </div>
        <div className="navbtn_grp">
          <div id="nav_enq_btn" style={{visibility:"hidden"}}>
          <EnquiryModal/>
        </div>
        
        <LoginDropdown/>

          </div>
      </div>
      
    </nav>
  );
};