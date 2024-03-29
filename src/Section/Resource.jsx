import React from 'react'
import Slider from "react-slick";
import Image1 from '../assets/Images/PoadcastImages/Ep8.png'
import Image2 from '../assets/Images/Global_speaking.png'
import Poad1 from '../assets/Images/Podcast Logos.png'
import Image3 from '../assets/Images/Blog 1.png'
import Poad2 from '../assets/Images/Podcast Logos(1).png'
import Poad3 from '../assets/Images/Podcast Logos(2).png'
import Poad4 from '../assets/Images/Podcast Logos(3).png'
export default function Resource() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: false,
    dotsClass:'sliderDots2',
    customPaging: i => (
      <div
      >
        {i + 1}
      </div>
    )
};
  return (
    <div className='section'>
    <div className='section_heading'>
        <h2 className='blue_heading'style={{color:"#fff"}}>Resource Center</h2>
      </div>


    <div>
    <Slider {...settings}>
      <div>
        <div className='resource_wrap'>
        <div className='course_right_wrap'>
        <img src={Image1} alt='image'/>
       </div>
       <div className='resource_left_wrap'>
         <h3  style={{color:"#fff"}}>Bills, Acts & eCourts : India's Ambition to Become a Global ODR Hub
</h3> 
<p style={{color:"#fff",letterSpacing:"2px"}} >We explore India's ambitious pursuit of Online Dispute Resolution (ODR) through government initiatives, legislative changes, and technological innovation – all with the vision of becoming a global ODR hub.
</p>
<h3  style={{color:"#fff"}}>Listen on</h3>
<div className='resourse_social_media_wrap'>
  <a href='https://podcasts.apple.com/in/podcast/8-bills-acts-ecourts-indias-ambition-to-become-a/id1688518562?i=1000629462014' target='_blank'><img src={Poad1}/></a>
  <a href='https://open.spotify.com/episode/5Kz9T91XR8qiN1UmOg0R18?si=DbQACc-DRUapsJ5XB_fD-w&utm_source=copy-link' target='_blank'><img src={Poad2}/></a>
  <a href='https://podcastsmanager.google.com/episode?show=show%3AnMfD3iiR1o9RVop7vz0CSg&episode=aHR0cHM6Ly9zcGhpbnguYWNhc3QuY29tL3Avb3Blbi9zLzY0NTQ5YzgxMThkYmQ1MDAxMjJhMjEyMy9lLzY0ZjMwMjQwYTIxMTY1MDAxMTYwYTEwNC9tZWRpYS5tcDM&daterange=LAST_28D&hl=en' target='_blank'><img src={Poad3}/></a>
  <a href="https://music.amazon.in/podcasts/d742a323-4d15-4fbc-ba12-f9888fc87cbd/episodes/44dbe0af-3c1a-40ec-a049-f754bfdff4d0/settle-the-battle-by-presolv360-8-bills-acts-ecourts-india's-ambition-to-become-a-global-odr-hub'" target='_blank'><img src={Poad4}/></a>
</div>
       </div>
        </div>
      
      </div>

      <div>
        <div className='resource_wrap'>
        <div className='course_right_wrap'>
        <img src={Image2} alt='Blog_image'/>
       </div>
       <div className='resource_left_wrap'>
         <h3 style={{padding:"0 2em 1em 1em",color:"#fff"}}>GLOBALLY SPEAKING: An Interview with Rahim Shamji, Founder, ADR ODR International
</h3> 
         <button className='orange_btn' style={{margin:"1em 2em"}}>Learn More</button>
       </div>
        </div>
      
      </div>


      <div>
        <div className='resource_wrap'>
        <div className='course_right_wrap'>
        <img src={Image3} alt='image'/>
       </div>
       <div className='resource_left_wrap'>
         <h3 style={{padding:"0 2em 1em 1em",color:"#fff"}}>Institutional Arbitration On
Disputes related to small-value leading.
</h3> 

         <button className='orange_btn'style={{margin:"1em 2em"}}>Learn More</button>
       </div>
        </div>
      
      </div>


       </Slider>
      
    </div>
  </div>
  )
}

