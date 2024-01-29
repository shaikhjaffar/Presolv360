import React from 'react'
import '../../assets/styles/offering.css'
import Timeline from '../../components/Timeline/Timeline'
import Case1 from '../../assets/Images/Casestudies1.png'
import Case2 from '../../assets/Images/Casestudies2.png'
import Image1 from '../../assets/Images/Arbitation/Property 1=Registration.png'
import Image2 from '../../assets/Images/Arbitation/Property 1=Verification.png'
import Image3 from '../../assets/Images/Arbitation/Property 1=Invitation.png'
import Image4 from '../../assets/Images/Arbitation/Property 1=Appointment.png'
import Image5 from '../../assets/Images/Arbitation/Property 1=statement.png'
import Image6 from '../../assets/Images/Arbitation/Property 1=Award.png'
import Slider from 'react-slick'
export default function Arbitration() {
    const fields = {
        years_timeline: [
            {
                 steps:1,
               tittle:"Registration of Dispute",
               description:"Register your dispute or escalate your existing dispute. Integration, automation, and administrative team will ensure a hassle-free process ",
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
                tittle:"Intimation of Notice of Registration of Arbitration",
                description:"Based on the nature, complexity and quantum of dispute an arbitrator is algorithmically assigned to ensure independence and impartiality",
                image:Image3,
            },
            {
                steps :4,
                tittle:"Appointment of Arbitrator",
                description:"Based on the nature, complexity and quantum of dispute an arbitrator is algorithmically assigned to ensure independence and impartiality",
                image:Image4,
            },
            {
                steps :5,
                tittle:"Submission of Statements and Evidence",
                description:"Upload statements within prescribed time limits along with evidence by leveraging data sharing and other tools",
                image:Image5,
            },
            {
                steps :6,
                tittle:"Award",
                description:"Based on the statements and evidence, the arbitrator passes the award, which is equivalent to a decree of the court",
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

   
    <section className='landing_wrap'>
        <h1>
        Obtain an enforceable outcome via an end-to-end online arbitration process <br></br>to-end online arbitration process
        </h1>
         <h3>
         Institutional online arbitration with the help of smart <br></br> case management, task automation, blockchain <br></br> integration, digital signing & stamping, and many <br></br> other powerful features
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
ARBITRATION</h2>
        </div>
        <Slider {...settings}>
          <div>
            <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Independence</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Institutional structure to ensure independence, impartiality and neutrality of proceedings</p>
              </div>
            </div>
          </div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Rules</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Proceedings in accordance with the arbitration law and Presolv360’s dispute resolution rules and code of conduct</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Fast-track Procedure</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Resolution time reduced to 90 days on an average, owing to technological integrations and features
</p>
              </div>
            </div></div>
          <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Experts</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Leverage our panel of retired judges, renowned arbitrators, senior advocates, and subject matter experts for an amicable outcome</p>
              </div>
            </div></div>
            <div>  <div className='offer_advantage_main_wrap'>
              <div className='offer_adv_title'>
                <h2>Support</h2>
              </div>
              <div className='offer_adv_desc'>
                 <p>Administrative team to assist parties throughout the dispute resolution journey</p>
              </div>
            </div></div>
        </Slider>
 </>: <>
         <div className='Mobile_core_wrap'> 
        <div className='core_mobile_card'>
    <h3>1. Registration of Dispute</h3>
    <p>Register your dispute or escalate your existing dispute. Integration, automation, and administrative team will ensure a hassle-free process</p>
  </div>
  <div className='core_mobile_card'>
    <h3>2. Verification and Approval</h3>
    <p>Auto-verification of dispute data to weed out any discrepancy and approval</p>
  </div>
  <div className='core_mobile_card'>
    <h3>3. Intimation of Notice of Registration of Arbitration
</h3>
    <p>Notice of Registration of Arbitration is transmitted to all disputing parties digitally</p>
  </div>
  <div className='core_mobile_card'>
    <h3>4. Appointment of Arbitrator</h3>
    <p>Based on the nature, complexity and quantum of dispute an arbitrator is algorithmically assigned to ensure independence and impartiality</p>
  </div>
  <div className='core_mobile_card'>
    <h3>5. Submission of Statements and Evidence</h3>
    <p>Upload statements within prescribed time limits along with evidence by leveraging data sharing and other tools</p>
  </div>
  <div className='core_mobile_card'>
    <h3>6. Award</h3>
    <p>Based on the statements and evidence, the arbitrator passes the award, which is equivalent to a decree of the court</p>
  </div>
  </div>
  <section className='milestonesection' style={{backgroundColor:"var(--color_1)",padding:"2em 1em 4em 1em"}}>
        <div className='section_heading'>
          <h2 className='blue_heading'style={{color:"#fff"}}>ADVANTAGES OF
ARBITRATION</h2>
        </div>
        <div className='Mobile_milestone_wrap'> 
    <div className='core_mobile_card'>
<h3>1. Independence</h3>
<p>Institutional structure to ensure independence, impartiality and neutrality of proceedings</p>
</div>
<div className='core_mobile_card'>
<h3>2. Rules</h3>
<p>Proceedings in accordance with the arbitration law and Presolv360’s dispute resolution rules and code of conduct</p>
</div>
<div className='core_mobile_card'>
<h3>3. Fast-track Procedure</h3>
<p>Resolution time reduced to 90 days on an average, owing to technological integrations and features</p>
</div>
<div className='core_mobile_card'>
<h3>4. Experts</h3>
<p>Leverage our panel of retired judges, renowned arbitrators, senior advocates, and subject matter experts for an amicable outcome</p>
</div>
<div className='core_mobile_card'>
<h3>5. Support</h3>
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
