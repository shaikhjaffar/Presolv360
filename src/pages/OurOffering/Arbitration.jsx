import React from 'react'
import '../../assets/styles/offering.css'
import Timeline from '../../components/Timeline/Timeline'
import Case1 from '../../assets/Images/Frame 160.png'
import Case2 from '../../assets/Images/ArbitationCase2Image.png'
import Image1 from '../../assets/Images/Arbitation/Property 1=Registration.png'
import Image2 from '../../assets/Images/Arbitation/Property 1=Verification.png'
import Image3 from '../../assets/Images/Arbitation/Property 1=Invitation.png'
import Image4 from '../../assets/Images/Arbitation/Property 1=Appointment.png'
import Image5 from '../../assets/Images/Arbitation/Property 1=statement.png'
import Image6 from '../../assets/Images/Arbitation/Property 1=Award.png'
import Slider from 'react-slick'
import AnimatedBox from '../../components/AnimatedBox'
export default function Arbitration() {
    const fields = {
        years_timeline: [
            {
                 steps:1,
               tittle:"Registration",
               description:"Register your dispute to initiate the arbitration process ",
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
                tittle:"Intimation",
                description:"Notification of arbitration sent to the other party by email, SMS, WhatsApp, IVR, post",
                image:Image3,
            },
            {
                steps :4,
                tittle:"Assignment",
                description:"Based on the nature of the dispute, a qualified expert arbitrator is algorithmically assigned from a broad-based panel",
                image:Image4,
            },
            {
                steps :5,
                tittle:"Submissions",
                description:"Upload pleadings, evidences, documents and data securely, and participate in oral hearings via secure video conferencing",
                image:Image5,
            },
            {
                steps :6,
                tittle:"Resolution",
                description:"Digitally stamped and signed award uploaded by the arbitrator which is binding under law",
                image:Image6,
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
        Obtain an enforceable outcome via an<br></br>end-to-end online arbitration process
        </h1>
         <h3 style={{padding:"0em 2em"}}>
         Leverage our institutional e-arbitration mechanism to achieve resolutions in record time and take advantage of smart case management, task automation, audit trails and machine learning
         </h3>
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
                <h2>VALIDATION</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Strong advisory council, deep research, thoroughly validated procedure and robust platform address all legal aspects of the arbitration process
</p>
              </div>
            </div>
          </div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title' style={{borderColor:"var(--color_2)"}}>
                <h2 style={{color:"var(--color_2)"}}>INDEPENDENCE</h2>
              </div>
              <div className='offer_adv_desc'style={{backgroundColor:"var(--color_2"}}>
                 <p>Institutional structure, broad-based experienced arbitrator panel, customised rules and code of conduct ensure neutrality and integrity of proceedings
</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>EFFICIENCY</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Auto-verification, simplified case management, task automation, bulk scheduling, digital infrastructure optimizes resolution timelines

</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title' style={{borderColor:"var(--color_2)"}}>
                <h2 style={{color:"var(--color_2)"}}>SUPPORT</h2>
              </div>
              <div className='offer_adv_desc'style={{backgroundColor:"var(--color_2"}}>
                 <p>Administrative and technical assistance to parties throughout the resolution journey</p>
              </div>
            </div></div>
            {/* <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Support</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Administrative team to assist parties throughout the dispute resolution journey</p>
              </div>
            </div></div> */}
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
<h3>1. Validation</h3>
<p>Strong advisory council, deep research, thoroughly validated procedure and robust platform address all legal aspects of the arbitration process
</p>
</div>
<div className='core_mobile_card'>
<h3>2. Independance</h3>
<p>Institutional structure, broad-based experienced arbitrator panel, customised rules and code of conduct ensure neutrality and integrity of proceedings
</p></div>
<div className='core_mobile_card'>
<h3>3. Efficiency</h3>
<p>Auto-verification, simplified case management, task automation, bulk scheduling, digital infrastructure optimizes resolution timelines

</p></div>
<div className='core_mobile_card'>
<h3>4. Supports</h3>
<p>Administrative and technical assistance to parties throughout the resolution journey</p>
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
              <h2>How India's major lender is leveraging online arbitration and experiencing record results</h2>
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
              <img src={Case2} alt='case2'/>
            </div>
         
            <div className='caseStudy_content'>
              <h2>How a unicorn SaaS platform in adopting online arbitration for
business
disputes</h2>
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
