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
export default function Mediation() {
    const fields = {
        years_timeline: [
            {
                 steps:1,
               tittle:"Registration of Dispute",
               description:"Initiate your path to resolution by registering your dispute. Integration, automation, and administrative team will ensure a hassle-free process. ",
               image:Image1,
            },
            {
                steps :2,
                tittle:"Verification and Approval",
               description:"Auto-verification of dispute data to weed out any discrepancy and approval.",
               image:Image2,
            },
            {
                steps :3,
                tittle:"Invitation to Mediate and Consent of Parties",
                description:"An invitation to mediate is transmitted to all disputing parties digitally, and consent to participate is sought.",
                image:Image3,
            },
            {
                steps :4,
                tittle:"Appointment of Mediator",
                description:"Based on the nature, complexity and quantum of dispute a mediator is algorithmically assigned from a broad-based panel of experts.",
                image:Image4,
            },
            {
                steps :5,
                tittle:"Secure Data Sharing",
                description:"Leverage data sharing and other tools to upload and share documents with the intended parties. ",
                image:Image5,
            },
            {
                steps :6,
                tittle:"Resolution",
                description:"Participate in a virtual mediation session facilitated by the mediator via a secure video conferencing application. ",
                image:Image6,
            },
            {
                steps :7,
                tittle:"Settlement Agreement",
                description:"Upon successful resolution, the platform facilitates the execution of the settlement report via secure e-signatures.",
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

   
    <section className='landing_wrap'>
        <h1>
        Foster amicable resolutions with ease and <br></br>efficiency, anytime, anywhere.
        </h1>
         <h3>
         Embrace a seamless mediation experience on our <br></br>platform that blends technology and human intelligence <br></br> to transform disputes into constructive dialogues</h3>
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
 </>: <>
         <div className='Mobile_core_wrap'> 
        <div className='core_mobile_card'>
    <h3>1. Registration of Dispute</h3>
    <p>Initiate your path to resolution by registering your dispute. Integration, automation, and administrative team will ensure a hassle-free process</p>
  </div>
  <div className='core_mobile_card'>
    <h3>2. Verification and Approval</h3>
    <p>Auto-verification of dispute data to weed out any discrepancy and approval</p>
  </div>
  <div className='core_mobile_card'>
    <h3>3. Invitation to Mediate and Consent of Parties
</h3>
    <p>An invitation to mediate is transmitted to all disputing parties digitally, and consent to participate is sought</p>
  </div>
  <div className='core_mobile_card'>
    <h3>4. Appointment of Mediator</h3>
    <p>Based on the nature, complexity and quantum of dispute a mediator is algorithmically assigned from a broad-based panel of experts</p>
  </div>
  <div className='core_mobile_card'>
    <h3>5. Secure Data Sharing</h3>
    <p>Leverage data sharing and other tools to upload and share documents with the intended parties</p>
  </div>
  <div className='core_mobile_card'>
    <h3>6. Resolution</h3>
    <p>Participate in a virtual mediation session facilitated by the mediator via a secure video conferencing application</p>
  </div>
  <div className='core_mobile_card'>
    <h3>7. Settlement Agreement</h3>
    <p>Upon successful resolution, the platform facilitates the execution of the settlement report via secure e-signatures</p>
  </div>
  </div>
  <section className='milestonesection' style={{backgroundColor:"var(--color_1)",padding:"2em 1em 4em 1em"}}>
        <div className='section_heading'>
          <h2 className='blue_heading'style={{color:"#fff"}}>ADVANTAGES OF
MEDIATION</h2>
        </div>
        <div className='Mobile_milestone_wrap'> 
    <div className='core_mobile_card'>
<h3>1. Recognition</h3>
<p>Presolv360 is empanelled as a Mediation Institute facilitating online mediation by over 5 courts across the country</p>
</div>
<div className='core_mobile_card'>
<h3>2. Digitization</h3>
<p>Adieu to physical files and offline processes. Experience dispute management and resolution on cloud</p>
</div>
<div className='core_mobile_card'>
<h3>3. Experts</h3>
<p>Leverage our panel of retired judges, renowned mediators, senior advocates, and subject matter experts for an amicable outcome</p>
</div>
<div className='core_mobile_card'>
<h3>4. Support</h3>
<p>Administrative team to assist parties throughout the dispute resolution journey</p>
</div>
</div>
        
         </section>
         
         </>
      
    }
            <div className='section_heading'>
          <h2 className='blue_heading'>CASE STUDIES</h2>
        </div>
         <div className='caseStudy_wrap'>
            <div className='caseStudy_content'>
              <h2>Courts Partnering to reduce case backlog and increase access to justice</h2>
               {
                window.innerWidth > 600 && <><button className='blue_btn'>Watch the Demo</button>
                <button   className='orange_btn' >Get Started</button></> 
               }
              
            </div>
            <div className='caseStudy_img'>
              <img src={Case1} alt='case1'/>
            </div>
            {
                window.innerWidth < 600 && <><button className='blue_btn'>Watch the Demo</button>
                <button   className='orange_btn' >Get Started</button></> 
               }
         </div>
         <div className='caseStudy_wrap case2'>
         {
                window.innerWidth < 600 && <><button className='blue_btn'>Watch the Demo</button>
                <button   className='orange_btn' >Get Started</button></> 
               }
            <div className='caseStudy_img'>
              <img src={Case2} alt='case1'/>
            </div>
         
            <div className='caseStudy_content'>
              <h2>One of India’s private sector banks adopted ODR and experienced record results.</h2>
              {
                window.innerWidth > 600 && <><button className='blue_btn'>Watch the Demo</button>
                <button   className='orange_btn' >Get Started</button></> 
               }
            </div>
         </div> 
    
 
    </div>
  )
}
