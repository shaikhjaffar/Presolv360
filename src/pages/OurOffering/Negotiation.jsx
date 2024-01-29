import React from 'react'
import '../../assets/styles/offering.css'
import Timeline from '../../components/Timeline/Timeline'
import Case1 from '../../assets/Images/Casestudies1.png'
import Case2 from '../../assets/Images/Casestudies2.png'
import Image1 from '../../assets/Images/Negotiation/Property 1=Settlement.png'
import Image2 from '../../assets/Images/Negotiation/Property 1=Invitation.png'
import Image3 from '../../assets/Images/Negotiation/Property 1=Negotiation.png'
import Image4 from '../../assets/Images/Negotiation/Property 1=Award.png'

import Slider from 'react-slick'
export default function Negotiation() {
    const fields = {
        years_timeline: [
            {
                 steps:1,
               tittle:"Propose a Settlement",
               description:"Register your dispute on our platform along with a proposed settlement offer ",
               image:Image1,
            },
            {
                steps :2,
                tittle:"Intimation of Offer",
               description:"The offer is transmitted to the other party over digital channels along with provision to accept the offer or propose a counter-offer",
               image:Image2,
            },
            {
                steps :3,
                tittle:"Negotiation",
                description:"An AI-driven negotiation is facilitated based on the offer and counter-offer proposed by the parties",
                image:Image3,
            },
            {
                steps :4,
                tittle:"Settlement Agreement",
                description:"Upon successful negotiation, the agreed terms are documented in an agreement",
                image:Image4,
            },
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
        Negotiate and settle disputes from <br></br> the comfort of your homes and offices
        </h1>
         <h3>
         Intuitive platform that will enable digital <br></br> transmission of offers to the other party, facilitate an <br></br> AI-driven negotiation, accept payments and <br></br> document settlement terms
         </h3>
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
          <h2 className='blue_heading'>ADVANTAGES OF
NEGOTIATION</h2>
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
    <h3>1. Propose a Settlement</h3>
    <p>Register your dispute on our platform along with a proposed settlement offer</p>
  </div>
  <div className='core_mobile_card'>
    <h3>2. Intimation of Offer</h3>
    <p>The offer is transmitted to the other party over digital channels along with provision to accept the offer or propose a counter-offer</p>
  </div>
  <div className='core_mobile_card'>
    <h3>3. Negotiation
</h3>
    <p>An AI-driven negotiation is facilitated based on the offer and counter-offer proposed by the parties</p>
  </div>
  <div className='core_mobile_card'>
    <h3>4. Settlement Agreement</h3>
    <p>Upon successful negotiation, the agreed terms are documented in an agreement</p>
  </div>

 
 
  </div>
  <section className='milestonesection' style={{backgroundColor:"var(--color_1)",padding:"2em 1em 4em 1em"}}>
        <div className='section_heading'>
          <h2 className='blue_heading'style={{color:"#fff"}}>ADVANTAGES OF NEGOTIATION</h2>
        </div>
        <div className='Mobile_milestone_wrap'> 
    <div className='core_mobile_card'>
<h3>1. Convenient</h3>
<p>Negotiating virtually allows you to participate in the process from your space and at your own time</p>
</div>
<div className='core_mobile_card'>
<h3>2. AI-driven</h3>
<p>Based on the facts of the dispute, our trained machine model proposes alternatives and facilitates a win-win outcome</p>
</div>
<div className='core_mobile_card'>
<h3>3. Economical</h3>
<p>Instead of expending hefty fees over lawyers and courts, attempt a settlement at a fraction of the cost</p>
</div>
<div className='core_mobile_card'>
<h3>4. One-stop Solution</h3>
<p>From proposing offers, to facilitating negotiations and preparing agreements, carry out all steps from one platform</p>
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
