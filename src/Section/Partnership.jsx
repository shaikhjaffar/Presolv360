import React from 'react'
import Marqueee from '../components/marquee'
import Image1 from '../assets/Images/patnership/Bar_and_Bench__1_-removebg-preview.png'
import Image2 from '../assets/Images/patnership/Business_today-removebg-preview.png'
import Image3 from '../assets/Images/patnership/Legal_World-removebg-preview 1.png'
import Image4 from '../assets/Images/patnership/Live Law.png'
import Image5 from '../assets/Images/patnership/The Hindu LOGO bg emoved.png'
import Image6 from '../assets/Images/patnership/YS_logo-removebg-preview.png'
export default function Partnership() {

   const data = [
    {
     img:Image1,
     alt:"Bar_and_Bench__1_-removebg-preview.png"
   },
   {
    img:Image2,
    alt:"Business_today-removebg-preview.png"
  },   {
    img:Image3,
    alt:"Legal_World-removebg-preview 1.png"
  },   {
    img:Image4,
    alt:"Live Law.png"
  },   {
    img:Image5,
    alt:"The Hindu LOGO bg emoved.png"
  },   {
    img:Image6,
    alt:"YS_logo-removebg-preview.png"
  },
  ]
  return (
    <div className='section'>
             <div className='section_heading'>
          <h2 className='blue_heading'>Features and Partnerships</h2>
        </div>
         <Marqueee data={data}/>
        </div>
  )
}
