import React from 'react'
import Landing from '../Section/landing'
import Stats from '../Section/Stats'
import OfferingSection from '../Section/OfferingSection'
import Client from '../Section/Client'
import { useEffect } from 'react'
import GuidedFinest from '../Section/GuidedFinest'
import Approach from '../Section/Approach'
import Outcome from '../Section/Outcome'
import Testimonal from '../Section/Testimonal'
import About from '../Section/About'
import Course from '../Section/Course'
import Resource from '../Section/Resource'
import Partnership from '../Section/Partnership'

export default function Home() {
  function showButton(){
    const btn = document.getElementById('nav_enq_btn')
    const element =   document.getElementById('nav')

  if(window.scrollY > 0.7*window.innerHeight){
        btn.style.visibility ="visible"
        element.style.backgroundColor="#fff" 
        element.style.backgroundImage="none"
  }
   else {
    btn.style.visibility ="hidden"
    element.style.backgroundColor="none" 
    element.style.backgroundImage="var(--gradient_url)"
   }
}
   useEffect(()=>{
    window.addEventListener('scroll',showButton)
   },[])
  return (
    <div>
      <div className='firstBreak'>
      <Landing/>
     <About/>
      </div>
  
    <Stats/>
    <div className='secondBreak'>
    <OfferingSection/>
    <GuidedFinest/>
    </div>

    <Approach/>
    <Outcome/>
    <Client/>
    <Testimonal/>
    <Partnership/>
    <div className='secondBreak'>
    <Course/>
    <Resource/>
    </div>
    </div>
   
  )
}
