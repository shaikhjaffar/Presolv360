import React from 'react'
import Image1 from '../assets/Images/3d-casual-life-analytics-on-computer-screen 1.png'
export default function Feature() {
  return (
    <div className='section'>
          <div className='section_heading'>
          <h2 className='orng_heading'>Key</h2>
          <h2 className='blue_heading'>Innovation</h2>
        </div>
       <div className='featuresection_body'>
             <div className='feture_img_wrap'>
                <img src={Image1} alt='feature_img'/>
                <span className='feature_circle1'></span>
                <span className='feature_circle2'></span>
                <span className='feature_circle3'></span>
                <span  className='feature_circle4'></span>
                <span  className='feature_circle5'></span>
                <span className='feature_circle6'></span>
             </div>

             
               <div className='feture_content feture_text1'>
                  <h3>Process automation and standardisation</h3>
                  <p>Legal processes can get lengthy and tedious not anymore. Driven by AI, our platform automates administrative tasks and establishes standardized templates, thereby providing a consistent and fair, simple and convenient resolution experience for all parties .</p>
               </div>
               <div className='feture_content feture_text2'>
                  <h3>Omni-channel communications infrastructure</h3>
                  <p>We understand that effective and accessible communication is the bridge from dispute to resolution. Therefore, we leverage multiple communication channels to reach out and enable participation of parties, even from the remotest part.</p>
               </div>
               <div className='feture_content feture_text3'>
               <h3>End-to-end cloud platform</h3>
                  <p>From dispute initiation to resolution, our integrated platform is user-centric and ensures a seamless experience for all stakeholders.  </p>
               </div>
               <div className='feture_content feture_text4'>
                  <h3>Multilingual capabilities</h3>
 <p>To solve disputes at scale, we support regional languages. Parties can also leverage our translation tool which will provide information regarding their dispute in their preferred language </p>               </div>
               <div className='feture_content feture_text5'>
                  <h3>Certified and compliant</h3>
                  <p>To solve disputes at scale, we support regional languages. Parties can also leverage our translation tool which will provide information regarding their dispute in their preferred language </p>
               </div>
               <div className='feture_content feture_text6'>
                  <h3>Process automation and standardisation</h3>
                  <p>Legal processes can get lengthy and tedious not anymore. Driven by AI, our platform automates administrative tasks and establishes standardized templates, thereby providing a consistent and fair, simple and convenient resolution experience for all parties .</p>
               </div>
              
             
       </div>

    </div>
  )
}
