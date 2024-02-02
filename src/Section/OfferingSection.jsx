import React, { useEffect, useState } from 'react'
import Nego1 from '../assets/Images/Property 1=Variant8.png'
import Nego2 from '../assets/Images/Property 1=Variant7.png'
import Nego3 from '../assets/Images/Property 1=Nego3.png'
import Med1 from '../assets/Images/Mediation1.png'
import Med2 from '../assets/Images/Mediation2.png'
import Med3 from '../assets/Images/Mediation3.png'
import Nego4 from '../assets/Images/Property 1=Nego3-1.png'
import Nego5 from '../assets/Images/Property 1=Nego4.png'
import Nego6 from '../assets/Images/Property 1=nego6.png'
import Reveal from '../utils/Reveal'
import Mobile_offer from '../components/Mobile_offer'
import ImageSequence from '../components/ImageSequence'
import { NavLink } from 'react-router-dom'
export default function OfferingSection() {
   
  const Data = {
     image:[Nego1,Nego2,Nego3,Nego4,Nego5,Nego6]
  }
  const Data1 = {
    image:[Med1,Med2,Med3]
 }
 const Data2 = {
  image:[Nego1,Nego2,Nego3,Nego4,Nego5,Nego6]
}

  const [option,setoption] = useState(0)
    function translatehighlight(endpoint){
       const value = {
         0 : "0%",
         1:"100%",
         2:"200%"
       }
      const highlight = document.getElementById('high')
        highlight.style.transform =`translateX(${value[endpoint]})`
    }
   function changeStep(node){
       const allElement = document.querySelectorAll('.offering_nav li')
            for(let i=0;i<allElement.length;i++ ){
       
                 if(i === node){
                     allElement[i].classList.add('active')
                     translatehighlight(node)
                      setoption(node) 
                 }
                 else {
                    allElement[i].classList.remove('active')
                 }
            }
   }
  //  useEffect(()=>{
   
  // },[option])
    

  return (
    <div className=' section offering_wrap'> 
        <div className='section_heading'>
          <h2 className='blue_heading'style={{color:"#fff",paddingTop:"1em"}}>What we offer</h2>
        </div>

        {
           window.innerWidth > 600 ? <>
            <ul className='offering_nav'>
              <span className='highlight_offer' id='high'></span>
            <li className='active'  onClick={()=>{changeStep(0)}}>
            Negotiation
            </li>
            <li onClick={()=>{changeStep(1)}}>
            Mediation
                </li>
                <li onClick={()=>{changeStep(2)}}>
                Arbitration
                </li>
           </ul>
           {
            (()=>{
                switch (option) {
                    case 0:
                          return (
                            <div className='offering_body'>
                                 <div className='offering_left'>
                                    <h2>Negotiate seamlessly and settle disputes digitally</h2>
                                    <p>Negotiate with counter-parties using our intuitive negotiation tools, multilingual chatbots, dynamic payment links, populate and exchange offers, and record terms in digital agreements</p>
                                    <NavLink  exact  to="/OurOffering/negotiation">
                                    <button className='orange_btn'>Learn More</button>
                                      </NavLink>  
                                     
                                    </div>
                                    <div className='offering_right'>
                                      <ImageSequence data={Data}/>
                                        {/* <img src={Image1} alt='image1'/> */}
                                        </div>
                            </div>
                          )
                              
                         case 1 : 
                         return (
                            <div className='offering_body'>
                                 <div className='offering_left'>
                                    <h2>Mutually-beneficial resolutions in a few clicks </h2>
                                    <p >Leverage the power of mediation to amicably resolve your dispute and record terms in a binding settlement agreement / conciliation award facilitated by certified mediators and our powerful mediation platform</p>
                                    <NavLink  exact  to="/OurOffering/mediation">
                                    <button className='orange_btn'>Learn More</button>
                                      </NavLink>  
                                    </div>
                                    <div className='offering_right'>
                                    <ImageSequence data={Data1}/>
                                        {/* <img src={Nego1} alt='image1'/> */}
                                        </div>
                            </div>
                          )
                           case 2:
                            return (
                                <div className='offering_body'>
                                <div className='offering_left'>
                                   <h2>Institutional e-arbitration for enforceable outcomes</h2>
                                   <p>While the institutional structure addresses all legal aspects, the platform ensures effective administration through AI-driven research, algorithmic case allocation, smart case management, task automation, digital awards, etc.</p>
                                   <NavLink  exact  to="/OurOffering/arbitration">
                                    <button className='orange_btn'>Learn More</button>
                                      </NavLink>  
                                   </div>
                                   <div className='offering_right'>
                                   <ImageSequence data={Data2}/>
                                       {/* <img src={Nego1} alt='image1'/> */}
                                       </div>
                           </div>
                              )
                    default:
                        break;
                }
            })
          () }
           </> :  <>
           <Mobile_offer/>
           
           </>
        }
          

    </div>
  )
}
