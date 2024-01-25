import React from 'react'
import Gallery1 from '../assets/Images/gallery1.png'
import Gallery2 from '../assets/Images/gallery2.png'
import './style.css'
export default function ResourceCenter() {
  return (
    <>
   
    <section className='landing_wrap'>
      <div className='content_landing_wrp' style={{width:"60%"}}>
      <h1>
    Run through of the latest trends
in online dispute resolution (ODR) and
a sneak peak into what’s brewing at 
    </h1>
    <div className='section_heading'>
          <h2 className='orng_heading'>Presolv</h2>
          <h2  style={{color:"#005186"}}>360</h2>
        </div>
          

      </div>
   

    
    <span className="scroll-btn">
<a href="#">
<span className="mouse">
  <span>
  </span>
</span>
</a>

<p>Scroll Down</p>
</span>


</section>
 <div className='event_gallery_wrap'>
    <div className='gallery_child'>
        <img src={Gallery1} alt='gallery1'/>
        <p>India Emerging as a Hub for ODR
</p>
    </div>
    <div className='gallery_child'>
        <img src={Gallery2} alt='gallery2'/>
        <p>India Emerging as a Hub for ODR
</p>
    </div>
    <div className='gallery_child'>
        <img src={Gallery1} alt='gallery1'/>
        <p>India Emerging as a Hub for ODR
</p>
    </div>
    <div className='gallery_child'>
        <img src={Gallery1} alt='gallery1'/>
        <p>India Emerging as a Hub for ODR
</p>
    </div>
 </div>
</>
  )
}
