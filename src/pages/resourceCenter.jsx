import React, { useState } from 'react'
import Gallery1 from '../assets/Images/gallery1.png'
import Gallery2 from '../assets/Images/gallery2.png'
import Gallery3 from '../assets/Images/Impression3.png'
import Gallery4 from '../assets/Images/Impression4.png'
import './style.css'
import DynamicModal from '../components/DynamicModel/DynamicModal'
import Mobile_impression from '../components/Mobile_impression'
import AnimatedBox from '../components/AnimatedBox'
const CaseContent = [
  {
  image:Gallery1,
  tittle:"India Emerging as a Hub for ODR",
  description : [`In partnership with Chase and NLU Delhi’s Centre for Alternate Dispute Resolution, we had the privilege of hosting a seminar that delved into the profound impact of emerging technologies on India's legal and judicial ecosystem.`,`The panel discussion, titled "India Emerging as a Hub for Online Dispute Resolution" moderated by Namita comprised of esteemed panelists - Mr. P. K. Malhotra, Justice Talwant Singh (Retd.), Mr. Srinath Sridharan, Ms. Komal Gupta and Mr. V. Srinivasan threw light upon actionable steps to make ODR the 'optimal dispute resolution mechanism' and how India is emerging as the global ODR hub.`,
  `It was an honor to welcome Hon'ble Justice Adarsh Kumar Goel as Chief Guest and Mr. Pravash Prashun Pandey, Joint Secretary - Department of Justice as Guest of Honor. Hon’ble Justice M.L. Mehta also graced the event.`
]

  },{
   image:Gallery2,
   tittle:"Graced by the presence of the finest",
   description:[`With utmost pleasure, we welcomed Hon’ble Mr. Justice B.N. Srikrishna (former Judge, Supreme Court of India) and our advisor Hon’ble Mr. Justice Kannan Krishnamoorthy (former Judge, Punjab & Haryana High Court) to our office. They engaged with the team on a myriad of topics and shared their pearls of wisdom.
   `,`
   It is with deep gratitude that we attribute our current standing to their unwavering guidance and support.`]
  },{
    image:Gallery3,
    tittle:"ODR platform for cross-border e-commerce disputes",
    description:[`Our Policy Team participated in the first-ever global discussion on the development of an ODR platform for cross-border consumer complaints related to the e-commerce sector organized by the Department of Consumer Affairs. 
    `,`India's initiative in pioneering this platform demonstrates our commitment to innovation and progress in the digital era. We are immensely proud to contribute to the efforts of the Government of India in this endeavor.`]
  },{
    image:Gallery4,
    tittle:"Solving for Recovery Disputes in the NBFC Space",
    description:[`India's NBFC sector is approximately worth USD 326Bn. However, these financial institutions face unique challenges when it comes to dispute resolution.
    `,`At the recent Board Meeting of the Finance Industry Development Council (FIDC) and 15th NBFC100 Tech Summit organized by Elets Technomedia, our Head of Sales, Soham, spoke about how NBFCs can leverage ODR to circumvent challenges and bring efficiency to their dispute resolution process.`]
  }
 ]
   const AlertDetail = ({number}) => {   
     return (
      <div className='casedetailwrap'> 
        <img src={CaseContent[number].image}/>
        <h3>{CaseContent[number].tittle}</h3>
        {
          CaseContent[number].description.map((descr)=>{
             return (
              <p>{descr}</p>
             )
          })
        }
       
      </div>
     )
   }

export default function ResourceCenter() {
    const [showModel,setShwoModel] = useState(false)
    const [ModalNumber,setModel] = useState(1)
    function showMoreDetail (modelnumber){
       setModel(modelnumber)
      setShwoModel(true)
    }
    function ExitDetail (value) {
       setShwoModel(value)
    }
  return (
    <div className='impressionPage'>
     <DynamicModal isOpen={showModel} closeMOdel={ExitDetail} children={<AlertDetail number={ModalNumber}/>} />
    <section className='landing_wrap firstBreak'>
      {
        window.innerWidth > 600 ?   <div className='content_landing_wrp' style={{width:"65%"}}>
        <h1>
      Run through the latest trends
  in online dispute resolution (ODR) and get
  a sneak peak into what’s brewing at 
      </h1>
      <h1>Presolv<span style={{color:"var(--color_2)"}}>360</span></h1>
      {/* <div className='section_heading'>
            <h2 className='blue_heading'>Presolv<span style={{color:"var(--color_2)"}}>360</span></h2>
          </div> */}
            
  
        </div> :   <div className='content_landing_wrp'>
      <h1>
    Run through the latest trends
in online dispute resolution (ODR) and get
a sneak peak into what’s brewing at 
    </h1>
    <div className='section_heading'>
          <h2 className='orng_heading'>Presolv</h2>
          <h2  style={{color:"#005186"}}>360</h2>
        </div>
          

      </div>
      }
    
  
<AnimatedBox/>
</section>
{
  window.innerWidth > 600 ? <div className='event_gallery_wrap'>
  <div className='gallery_child' onClick={()=>{showMoreDetail(0)}}>
      <img src={Gallery1} alt='gallery1'/>
      <p>India Emerging as a Hub for ODR
</p>
  </div>
  <div className='gallery_child'onClick={()=>{showMoreDetail(1)}}>
      <img src={Gallery2} alt='gallery2'/>
      <p>Graced by the presence of the finest

</p>
  </div>
  <div className='gallery_child'onClick={()=>{showMoreDetail(2)}}>
      <img src={Gallery3} alt='gallery1'/>
      <p>Solving for Recovery Disputes 
in the NBFC Space
</p>
  </div>
  <div className='gallery_child'onClick={()=>{showMoreDetail(3)}}>
      <img src={Gallery4} alt='gallery1'/>
      <p>ODR platform for cross-border 
e-commerce disputes
</p>
  </div>
</div> : <Mobile_impression data={CaseContent} />
}
 

<div className='newsletter_wrap'>
   <h3>JOIN OUR NEWSLETTER</h3>
  <p>Join our newsletter to receive the latest news and exclusive information regarding online dispute resolution</p>
  <div style={{
   display:"flex",
   gap:"1em"
  }}>
  <input type='text' placeholder='Enter your email'/>
  <button className='blue_btn'>Subscribe</button>
  </div>

</div>

</div>
  )
}
