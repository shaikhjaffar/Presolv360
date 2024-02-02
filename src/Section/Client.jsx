import React from 'react'
import Marqueee from '../components/marquee'
import Image1 from '../assets/Images/Client/CBFW_CoreLogo_NavyOrange_RGB-Sian-Hawkins 1.png'
import Image2 from'../assets/Images/Client/Cyril_Amarchand_Mangaldas 1.png'
import Image3 from '../assets/Images/Client/Img1-removebg-preview 1.png'
import Image4 from '../assets/Images/Client/MSINS-Website-logo_official-1 1.png'
import Image5 from '../assets/Images/Client/NSRCEL Main logo 1.png'
import Image6 from'../assets/Images/Client/TSIC.png'
import Image7 from '../assets/Images/Client/download-removebg-preview (1) 1.png'
import Image8 from '../assets/Images/Client/satyamev-jayate-removebg-preview 1.png'
import Image9 from '../assets/Images/Client/Frame 6.png'
export default function Client() {
  const data = [
    {
     img:Image1,
   },
   {
    img:Image2,
   },
     {
    img:Image3,
  },   {
    img:Image4,
    alt:"Live Law.png"
  },   {
    img:Image5,
    alt:"The Hindu LOGO bg emoved.png"
  }, 
    {
    img:Image6,
  },
  //   {
  //   img:Image7,
  //   alt:"Live Law.png"
  // },  
   {
    img:Image8,
    alt:"satyamev-jayate-removebg-preview 1.png"
  },
     {
    img:Image9,
    alt:"Frame 6.png"
  }
  ]
  return (
    <div className='section'>
       <div className='section_heading'>
          <h2 className='blue_heading'>Alliances & Incubation</h2>
        </div>
         <div>
           <Marqueee data={data}/>
         </div>
    </div>
  )
}
