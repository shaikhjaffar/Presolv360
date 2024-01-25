import React from 'react'
import '../assets/styles/offering.css'
import Image1 from '../assets/Images/Registration of dispute.png'
import One from '../assets/Images/One.png'
import Timeline from '../components/Timeline/Timeline'
import Case1 from '../assets/Images/Casestudies1.png'
import Case2 from '../assets/Images/Casestudies2.png'
import Slider from 'react-slick'
export default function OurOffering() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
    arrows: false,
    dotsClass:'sliderDots',
    customPaging: i => (
      <div
      >
        {i + 1}
      </div>
    )}
  return (
    <div className='offeringpage'>

   
    <section className='landing_wrap'>
        <h1>
        Foster amicable resolutions with ease and <br></br>efficiency, anytime, anywhere.
        </h1>
         <h3>
         Embrace a seamless mediation experience on our <br></br>platform that blends technology and human intelligence <br></br> to transform disputes into constructive dialogues</h3>
    </section>
    {
       window.innerWidth > 600 ? <>
       <div className='section_heading'>
          <h2 className='blue_heading'>PROCESS FLOW</h2>
        </div>
        <section>
             <Timeline/>
        </section>
        <div className='section_heading'>
          <h2 className='blue_heading'>ADVANTAGES OF MEDIATION</h2>
        </div>
        <Slider {...settings}>
          <div>
            <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Recognition</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Presolv360 is empanelled as a Mediation Institute facilitating online mediation by over five courts across the country</p>
              </div>
            </div>
          </div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Digitization</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Adieu to physical files and offline processes. Experience dispute management and resolution on cloud.</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Experts</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Leverage our panel of retired judges, renowned mediators, senior advocates, and subject matter experts for an amicable outcome.
</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Support</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Administrative team to assist parties throughout the dispute resolution journey. </p>
              </div>
            </div></div>
        </Slider>
        <div className='section_heading'>
          <h2 className='blue_heading'>CASE STUDIES</h2>
        </div>
         <div className='caseStudy_wrap'>
            <div className='caseStudy_content'>
              <h2>Courts Partnering to reduce case backlog and increase access to justice</h2>
              <button className='blue_btn'>Watch the Demo</button>
              <button   className='orange_btn' >Get Started</button>
            </div>
            <div className='caseStudy_img'>
              <img src={Case1} alt='case1'/>
            </div>
         </div>
         <div className='caseStudy_wrap'>
           
            <div className='caseStudy_img'>
              <img src={Case2} alt='case1'/>
            </div>
            <div className='caseStudy_content'>
              <h2>One of India’s private sector banks adopted ODR and experienced record results.</h2>
              <button className='blue_btn'>Watch the Demo</button>
              <button   className='orange_btn' >Get Started</button>
            </div>
         </div>  </>: <></>
      
    }
    
 
    </div>
  )
}
