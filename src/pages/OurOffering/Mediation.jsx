import React from 'react'
import '../../assets/styles/offering.css'
import Timeline from '../../components/Timeline/Timeline'
import Case1 from '../../assets/Images/Casestudies1.png'
import Case2 from '../../assets/Images/Casestudies2.png'
import Image1 from '../../assets/Images/Mediation/Property 1=Registration.png'
import Image2 from '../../assets/Images/Mediation/Property 1=Verification.png'
import Image3 from '../../assets/Images/Mediation/Property 1=Invitation.png'
import Image4 from '../../assets/Images/Mediation/Property 1=Appointment.png'
import Image5 from '../../assets/Images/Mediation/Property 1=Data Secured.png'
import Image6 from '../../assets/Images/Mediation/Property 1=Resolution.png'
import Image7 from '../../assets/Images/Mediation/Property 1=Settlement.png'
import Slider from 'react-slick'
import AnimatedBox from '../../components/AnimatedBox'
export default function Mediation() {
    const fields = {
        years_timeline: [
            {
                 steps:1,
               tittle:"Registration",
               description:"Register your dispute to initiate the mediation process",
               image:Image1,
            },
            {
                steps :2,
                tittle:"Verification",
               description:"Auto-verification of dispute data to weed out any discrepancies",
               image:Image2,
            },
            {
                steps :3,
                tittle:"Invitation",
                description:"Invitation to mediate sent to the other party by email, SMS, WhatsApp, IVR, post",
                image:Image3,
            },
            {
                steps :4,
                tittle:"Assignment",
                description:"Based on the nature of the dispute, a certified expert mediator is algorithmically assigned",
                image:Image4,
            },
            {
                steps :5,
                tittle:"Upload",
                description:"Share data and documents confidentially with the intended recipients ",
                image:Image5,
            },
            {
                steps :6,
                tittle:"Sessions",
                description:"Participate in mediation sessions via secure video conferencing",
                image:Image6,
            },
            {
                steps :7,
                tittle:"Resolution",
                description:"Digitally stamp and sign settlement agreement upon successful resolution",
                image:Image7,
            }
        ]
    };
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

<div className='firstBreak'> 
    <section className='landing_wrap'>
        <h1>
        Foster amicable resolutions with ease and <br></br>efficiency, anytime, anywhere
        </h1>
         <h3>
         Embrace a seamless mediation experience on our <br></br>platform that blends technology and human intelligence <br></br> to transform disputes into constructive dialogues</h3>
         <AnimatedBox/>
    </section>
    <div className='section_heading'>
          <h2 className='blue_heading'>PROCESS FLOW</h2>
        </div>
    {
       window.innerWidth > 600 ? <>
  
        <section>
             <Timeline fields={fields} />
        </section>
        <div className='section_heading'>
          <h2 className='blue_heading'>ADVANTAGES</h2>
        </div>
        <Slider {...settings}>
          <div>
            <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Recognition</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Presolv360 is empanelled as a Mediation Institute facilitating online mediation by various courts in India</p>
              </div>
            </div>
          </div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'style={{borderColor:"var(--color_2)"}}>
                <h2 style={{color:"var(--color_2)"}}>Digitization</h2>
              </div>
              <div className='offer_adv_desc'style={{backgroundColor:"var(--color_2"}}>
                 <p>Adieu to physical files and offline processes. Experience dispute management and resolution on cloud</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Experts</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Leverage our panel of retired judges, renowned mediators, senior advocates, and subject matter experts for an amicable outcome
</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'style={{borderColor:"var(--color_2)"}}>
                <h2 style={{color:"var(--color_2)"}}>Support</h2>
              </div>
              <div className='offer_adv_desc'style={{backgroundColor:"var(--color_2"}}>
                 <p>Administrative and technical assistance to parties throughout the resolution journey </p>
              </div>
            </div></div>
        </Slider>
 </>: <>
         <div className='Mobile_core_wrap'> 
         {
           fields.years_timeline.map((ele)=>{
              return (
                <div className='core_mobile_card'>
                <h3>{`${ele.steps}. `}  {ele.tittle}</h3>
                <p>{ele.description}</p>
              </div>
              )
        
           })
         }
  </div>
  <section className='milestonesection' style={{backgroundColor:"var(--color_1)",padding:"2em 1em 4em 1em"}}>
        <div className='section_heading'>
          <h2 className='blue_heading'style={{color:"#fff"}}>ADVANTAGES</h2>
        </div>
        <div className='Mobile_milestone_wrap'> 
    <div className='core_mobile_card'>
<h3>1. Recognition</h3>
<p>Presolv360 is empanelled as a Mediation Institute facilitating online mediation by various courts in India</p>
</div>
<div className='core_mobile_card'>
<h3>2. Digitization</h3>
<p>Adieu to physical files and offline processes. Experience dispute management and resolution on cloud</p>
</div>
<div className='core_mobile_card'>
<h3>3. Experts</h3>
<p>Leverage our panel of retired judges, renowned mediators, senior advocates, and subject matter experts for an amicable outcome
</p>
</div>
<div className='core_mobile_card'>
<h3>4. Support</h3>
<p>Administrative and technical assistance to parties throughout the resolution journey </p>
</div>
</div>
        
         </section>
         
         </>
      
    }
    </div>
            <div className='section_heading'>
          <h2 className='blue_heading'>CASE STUDY</h2>
        </div>
         <div className='caseStudy_wrap'>
            <div className='caseStudy_content'>
              <h2>How courts are partnering to reduce case backlog and increase access to justice</h2>
               {
                window.innerWidth > 600 && <>
                {/* <button className='blue_btn'>Watch the Demo</button> */}
                <button   className='orange_btn' >Get Started</button></> 
               }
              
            </div>
            <div className='caseStudy_img'>
              <img src={Case1} alt='case1'/>
            </div>
            {
                window.innerWidth < 600 && <>
                {/* <button className='blue_btn'>Watch the Demo</button> */}
                <button   className='orange_btn' >Get Started</button></> 
               }
         </div>
         <div className='caseStudy_wrap case2'>
         {
                window.innerWidth < 600 && <>
                {/* <button className='blue_btn'>Watch the Demo</button> */}
                <button   className='orange_btn' >Get Started</button></> 
               }
            <div className='caseStudy_img'>
              <img src={Case2} alt='case1'/>
            </div>
         
            <div className='caseStudy_content'>
              <h2>How India's leading bank is leveraging online mediation and experiencing record results</h2>
              {
                window.innerWidth > 600 && <>
                {/* <button className='blue_btn'>Watch the Demo</button> */}
                <button   className='orange_btn' >Get Started</button></> 
               }
            </div>
         </div> 
    
 
    </div>
  )
}
