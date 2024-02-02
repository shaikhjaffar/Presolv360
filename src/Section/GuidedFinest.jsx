import React from 'react'
import Image3 from '../assets/Images/Justice Kannan New.png'
import Image2 from '../assets/Images/Justice Sri Krishna New.png'
import Image1 from '../assets/Images/Justice U.U. Lalit New.png'
import Slider from 'react-slick'
export default function GuidedFinest() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dotsClass:'sliderDots2',
    customPaging: i => (
      <div
      >
        {i + 1}
      </div>
    )}
  return (
    <div className='section sec3'>
       <div className='section_heading'>
          <h2 className='blue_heading'style={{color:"#fff",paddingTop:"1em",paddingBottom:"0em"}}>ADVISORY COUNCIL</h2>
        </div>
        {
           window.innerWidth > 600 ?  <div className='guide_body_wrap'>
              <div className='guide_card'>
                 <img  src={Image1} alt='Justice U.U. Lalit'/>
                 <h3>Justice U. U. Lalit</h3>
                 <p>Former Chief Justice of india</p>
               </div>
           <div className='guide_card'>
               <img  src={Image2} alt='Justice B.N. Srikrishna'/>
                 <h3>Justice B. N. Srikrishna</h3>
                 <p>Judge (Retd.) Supreme Court of India</p>
               </div>
             
              
               <div className='guide_card'>
               <img  src={Image3} alt='Justice K. Kannan'/>
                 <h3>Justice K. Kannan</h3>
                 <p>Judge (Retd.) Punjab & Haryana High Court</p>
               </div>
           </div> : <Slider {...settings} >
                <div>
                <div className='guide_card'>
               <img  src={Image2} alt='Justice B.N. Srikrishna'/>
                 <h3>Justice B. N. Srikrishna</h3>
                 <p>Judge (Retd.) Supreme Court of India</p>
               </div>
                </div>
                <div>
                <div className='guide_card'>
                 <img  src={Image1} alt='Justice U.U. Lalit'/>
                 <h3>Justice U. U. Lalit</h3>
                 <p>Former Chief Justice of india</p>
               </div>
                </div>
                <div>  <div className='guide_card'>
               <img  src={Image3} alt='Justice K. Kannan'/>
                 <h3>Justice K. Kannan</h3>
                 <p>Judge (Retd.) Punjab & Haryana High Court</p>
               </div></div>
           </Slider>
        }
        
    </div>
  )
}
