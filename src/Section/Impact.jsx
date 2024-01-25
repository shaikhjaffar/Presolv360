import React, { useEffect, useState } from 'react'
import Image1 from '../assets/Images/Impact_3.gif'
import Image2 from '../assets/Images/data1.png'
import Image3 from '../assets/Images/data2.png'
import Reveal from '../utils/Reveal'
export default function Impact() {
  const [option,setoption] = useState(0)
    function translatehighlight(endpoint){
       const value = {
         0 : "0%",
         1:"100%",
         2:"200%"
       }
      const highlight = document.getElementById('outcome_nav')
        highlight.style.transform =`translateX(${value[endpoint]})`
    }
   function changeStep(node){
       const allElement = document.querySelectorAll('.outcome_nav li')
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
    <div className='offering_wrap'> 
       <div className='section_heading'>
          <h2 className='orng_heading'>Transformative</h2>
          <h2 className='blue_heading'>Outcomes</h2>
        </div>
           <ul className='outcome_nav'>
              <span className='highlight' id='outcome_nav'></span>
            <li className='active'  onClick={()=>{changeStep(0)}}>
            Environmental
            </li>
            <li onClick={()=>{changeStep(1)}}>
            Economical
                </li>
                <li onClick={()=>{changeStep(2)}}>
                Social
                </li>
           </ul>
           {
            (()=>{
                switch (option) {
                    case 0:
                          return (
                            <div className='offering_body'>
                                
                                    <div className='offering_right'>
                                        <img src={Image1} alt='image1'/>
                                        </div>
                                        <div className='offering_left'>
                                
                                <ul>
                                    <li>20.3 million <span> sheets of paper Saved</span></li>
                                    <li>2442 trees <span> Saved</span></li>
                                    <li>203 million Liters <span> of water</span></li>
                                    <li>8526 pounds of air pollution <span> prevented due to paper manufacturing process</span></li>
                                </ul>
        
                                    </div>
                            </div>
                          )
                              
                         case 1 : 
                         return (
                            <div className='offering_body'>
                                
                                    <div className='offering_right'>
                                        <img src={Image2} alt='image1'/>
                                        </div>
                                        <div className='offering_left'>
                                    <h2>Reach a mutually-beneficial outcome from the comfort of your home and workplace</h2>
                                    <p >Attempt an amicable resolution of your dispute before knocking the doors of courts. With confidentiality and data security at the core of our platform, parties have leveraged our digital infrastructure and panel of mediators and obtained a resolution in as less as 30 days.</p>
                                     
                                    </div>
                            </div>
                          )
                           case 2:
                            return (
                                <div className='offering_body'>
                              
                                   <div className='offering_right'>
                                       <img src={Image3} alt='image1'/>
                                       </div>
                                       <div className='offering_left'>
                                   <h2>Reach a mutually-beneficial outcome from the comfort of your home and workplace</h2>
                                   <p>Attempt an amicable resolution of your dispute before knocking the doors of courts. With confidentiality and data security at the core of our platform, parties have leveraged our digital infrastructure and panel of mediators and obtained a resolution in as less as 30 days.</p>
                                    
                                   </div>
                           </div>
                              )
                    default:
                        break;
                }
            })
          () }

    </div>
  )
}
