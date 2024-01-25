import React from 'react'
import CourseMockup from '../assets/Images/courseMockup.png'
export default function Course() {
  return (
    <div className='section'>
      <div className='section_heading'>
          <h2 className='blue_heading' style={{color:"#fff"}}>Online Dispute Resolution Course</h2>
        </div>
      <div className='course_body_wrap'>
         <div className='course_right_wrap'>
             <img src={CourseMockup} style={{width:"85%"}} alt='Course_Mockup'/>
         </div>
         <div className='course_left_wrap'>
           <h3 style={{color:"#fff"}} >Embark on a journey to become an ODR expert.  Join our exclusive certified course encapsulating mediation and arbitration in the metaverse, advanced dispute resolution tools, master classes by industry experts, and much more</h3>
           <button className='orange_btn'>Enroll Now</button>
         </div>
      </div>
    </div>
  )
}
