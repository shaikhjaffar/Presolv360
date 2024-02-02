import React, { useState } from 'react'
import './style.css'
import EnquiryModal from '../EnquiryModal'
import { NavLink } from 'react-router-dom'
import LoginDropdown from '../LoginDropdown'
export default function Hamburger() {
   const [offer,setoffer] = useState(false)
   const [resource,setresource] = useState(false)
      function changeTheCheckbox ( ){
          const element = document.getElementById('hamburger')
           element.checked = false
      }
      function showDropDown(){
          setoffer(!offer)
      }
  return (
      
    <>
      <div class="ham_navbar">
        <div class="ham_container ham_nav-container">
            <input class="checkbox" type="checkbox" name="" id="hamburger" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="ham_menu-items">
            <ul className='ham_menu_wrap'>
            <li onClick={changeTheCheckbox}>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li onClick={changeTheCheckbox}>
              <NavLink  exact  to="/About_us">About us</NavLink>
            </li>
      
            <li onClick={()=>{showDropDown('offer_drp')}}>
              Solution
     {
       offer ?  <ul className='offer_drp_dwn' id='offer_drp'>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/negotiation">Negotiation</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/arbitration">Arbitration</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/mediation">Mediation</NavLink>
        </ul> : <></>
     }
            
            </li>
            <li onClick={()=>{setresource(!resource)}}>
              Our Offering
     {
       resource ?  <ul className='offer_drp_dwn' id='resource_drp'>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/negotiation">Negotiation</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/arbitration">Arbitration</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/mediation">Mediation</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/negotiation">Negotiation</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/arbitration">Arbitration</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/mediation">Mediation</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/negotiation">Negotiation</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/arbitration">Arbitration</NavLink>
        <NavLink onClick={changeTheCheckbox} exact  to="/OurOffering/mediation">Mediation</NavLink>
        </ul> : <></>
     }
            
            </li>
            {/* <li onClick={changeTheCheckbox}>
              <NavLink exact  to="/ResourceCenter">Resource Center</NavLink>
            </li> */}
            <li onClick={changeTheCheckbox}>
              <NavLink exact  to="/Career">Career</NavLink>
            </li>
            <li onClick={changeTheCheckbox}>
            <EnquiryModal/>
            </li>
             <li onClick={changeTheCheckbox}>
             <LoginDropdown/>
             </li>
            
            </ul>
         
          </div>
        </div>
      </div>
    </>
  )
}