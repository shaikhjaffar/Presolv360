import React, { useEffect, useState } from 'react'
import Nego1 from '../assets/Images/Property 1=Variant8.png'
import Nego2 from '../assets/Images/Property 1=Variant7.png'
import Nego3 from '../assets/Images/Property 1=Nego3.png'
import Nego4 from '../assets/Images/Property 1=Nego3-1.png'
import Nego5 from '../assets/Images/Property 1=Nego4.png'
import Nego6 from '../assets/Images/Property 1=nego6.png'
import Reveal from '../utils/Reveal'
import Mobile_offer from '../components/Mobile_offer'
import ImageSequence from '../components/ImageSequence'
export default function OfferingSection() {
   
  const Data = {
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
                                    <h2>Seamlessly negotiate and settle commercial disputes digitally</h2>
                                    <p>Determine a settlement offer and propose it to the other party over digital channels along with the payment link. AI-driven negotiation of the settlement terms and provision to make payment. Close the dispute by executing a settlement agreement. Negotiating made simpler, accessible and intuitive</p>
                                     <button className='orange_btn'>Learn More</button>
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
                                    <h2>Reach a mutually-beneficial outcome from the comfort of your home and workplace</h2>
                                    <p >Attempt an amicable resolution of your dispute before knocking the doors of courts. With confidentiality and data security at the core of our platform, parties have leveraged our digital infrastructure and panel of mediators and obtained a resolution in as less as 30 days</p>
                                     <button className='orange_btn'>Learn More</button>
                                    </div>
                                    <div className='offering_right'>
                                        <img src={Nego1} alt='image1'/>
                                        </div>
                            </div>
                          )
                           case 2:
                            return (
                                <div className='offering_body'>
                                <div className='offering_left'>
                                   <h2>Obtain an enforceable outcome by opting for institutional online arbitration</h2>
                                   <p>Use smart case management tools, task automation, blockchain integration, digital signing & stamping, and many other powerful features and experience a digitized arbitration process</p>
                                    <button className='orange_btn'>Learn More</button>
                                   </div>
                                   <div className='offering_right'>
                                       <img src={Nego1} alt='image1'/>
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
