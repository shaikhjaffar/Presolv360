import React from 'react'
import '../../assets/styles/offering.css'
import Timeline from '../../components/Timeline/Timeline'
import Case1 from '../../assets/Images/NegotiationCaseImage.png'
import Image1 from '../../assets/Images/Negotiation/Property 1=Settlement.png'
import Image2 from '../../assets/Images/Negotiation/Property 1=Invitation.png'
import Image3 from '../../assets/Images/Negotiation/Property 1=Negotiation.png'
import Image4 from '../../assets/Images/Negotiation/Property 1=Award.png'

import Slider from 'react-slick'
import AnimatedBox from '../../components/AnimatedBox'
export default function Negotiation() {
    const fields = {
        years_timeline: [
            {
                 steps:1,
               tittle:"Registration",
               description:"Register your case and propose a settlement offer ",
               image:Image4,
            },
            {
                steps :2,
                tittle:"Intimation",
               description:"Offer is transmitted to the other party over email/SMS/WhatsApp/post with option to accept/propose counter-offer",
               image:Image2,
            },
            {
                steps :3,
                tittle:"Negotiation",
                description:"AI-driven negotiation is facilitated based on the offer and counter-offer proposed by the parties",
                image:Image3,
            },
            {
                steps :4,
                tittle:"Settlement",
                description:"Upon successful negotiation, the agreed terms are documented in a settlement agreement",
                image:Image1,
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

<div className='firstBreak'>
    <section className='landing_wrap'>
    
        <h1>Use our negotiation suite to achieve <br></br> settlements at your fingertips</h1>
       
         <h3>Intuitive platform for automating communication workflows,<br></br> digital transmission of offers, real-time tracking of responses,<br></br> machine-driven negotiations and documenting settlements</h3>
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
                <h2>Convenient</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Negotiating virtually allows you to participate in the process from your space and at your own time</p>
              </div>
            </div>
          </div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'style={{borderColor:"var(--color_2)"}}>
                <h2 style={{color:"var(--color_2)"}}>AI-driven</h2>
              </div>
              <div className='offer_adv_desc'style={{backgroundColor:"var(--color_2"}}>
                 <p>Based on the facts, our trained machine model proposes alternatives and facilitates a win-win outcome</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Economical</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Instead of expending hefty fees over lawyers and courts, attempt a settlement at a fraction of the cost</p>

              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'style={{borderColor:"var(--color_2)"}}>
                <h2 style={{color:"var(--color_2)"}}>One-stop solution</h2>
              </div>
              <div className='offer_adv_desc'style={{backgroundColor:"var(--color_2"}}>
                 <p>From exchanging offers to facilitating negotiations to documenting settlements, carry out all steps under one roof</p>
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
<h3>1. Convenient</h3>
<p>Negotiating virtually allows you to participate in the process from your space and at your own time</p>
</div>
<div className='core_mobile_card'>
<h3>2. AI-driven</h3>
<p>Based on the facts, our trained machine model proposes alternatives and facilitates a win-win outcome</p>
</div>
<div className='core_mobile_card'>
<h3>3. Economical</h3>
<p>Instead of expending hefty fees over lawyers and courts, attempt a settlement at a fraction of the cost</p>
</div>
<div className='core_mobile_card'>
<h3>4. One-step Solution</h3>
<p>From exchanging offers to facilitating negotiations to documenting settlements, carry out all steps under one roof</p>
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
              <h2>How a new-age fintech is 
leveraging the negotiation
tool to drive settlements</h2>
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
         {/* <div className='caseStudy_wrap case2'>
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
         </div>  */}
 
    </div>
  )
}
