import React from 'react'
import FounderIMage from '../assets/Images/Founding Team 1.png'
import Image3 from '../assets/Images/Justice Kannan New.png'
import Image2 from '../assets/Images/Justice Sri Krishna New.png'
import Image1 from '../assets/Images/Justice U.U. Lalit New(blue).png'
import Image4 from '../assets/Images/Bhaven Shah.png'
import Image5 from '../assets/Images/Namita Shah.png'
import Image6 from '../assets/Images/Aman Shangvi.png'
import FlipCard from '../components/flipCard/FlipCard'
import Pradeep from '../assets/Images/Justice Pradeep Nandrajog.png'
import Srinath from '../assets/Images/Mr Srinath Sridharan.png'
import Ashok from '../assets/Images/Mr Ashok Barat.png'
import Tanu from '../assets/Images/Ms Tanu Mehta.png'
import Ankit from '../assets/Images/Mr Ankit Sahni.png'
import Raman from '../assets/Images/Mr Raman Aggarwal.png'
import Rajni from '../assets/Images/Late Ms Rajani Iyer.png'
import Slider from 'react-slick'
import MileStone_mobile from '../components/MileStone_mobile'
import Mobile_corevalue from '../components/Mobile_corevalue'
export default function AboutPage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dotsClass:'sliderDots',
    customPaging: i => (
      <div
      >
        {i + 1}
      </div>
    )}
 const FlipCardData = [
  {
   tittle:"Mission Driven",
     description:"We will passionately apply ourselves to serving our stakeholders, knowing that if we create value for them, value will flow to our company.",
  },
  {
    tittle:"Extreme Ownership",
      description:"We think and act like owners. Our focus is on buliding long-term value, not scoring short-term marks.",
   },
   {
    tittle:"Boldness",
      description:"We want to revolutionize. Make a difference. We would rather fail at something meaningful than succeed at something trivial.",
   },
   {
    tittle:"Creating our own Luck",
      description:"The best way to make progress is to act.",
   },
   {
    tittle:"Economical",
      description:"Efficiency is important, and we consider both the costs and benefits of our actions.",
   },
   {
    tittle:"Team - Oriented",
      description:'In working together, we maintain a low ego, make everyone feel welcome, assume good intent, trust one another, and seek out different perspectives. We empower our teammates to be at their best. We believe in the principle of "support each other to grow together".',
   },
   {
    tittle:"Challegene but not overwhelmed",
      description:"We are curious people and learning is our second name. Growth happens outside our comfort zone. We achieve our potential through consistent, manageable growth.",
   },
   {
    tittle:"Integrity",
      description:"We do the right thing. When we make mistakes, we own and correct them. Everyone can count on us to act according to our values, beliefs, and principles we state we hold. This trust must never be broken.",
   },

 ]

  return (
    <div className='aboutPage'>

     <div className='firstBreak'>
    <section className='landing_wrap'>
        <h1>
        “Son, your father started this case and <br></br> your  child will conclude it.” 
        </h1>
        {
          window.innerWidth > 600 ?  <h3>
          This remark by a Supreme Court judge was the <br></br> eureka moment which led to the inception of <br>
          </br>
          <span style={{color:"var(--color_2)"}}> Presolv</span>360
          </h3> : <h3>
          This remark by a Supreme Court judge was the  eureka moment which led to the inception of 
          <br></br>
          <span style={{color:"var(--color_2)"}}> Presolv</span>360
          </h3>
        }
        
    </section>
   
    <div className='section_heading'>
          <h2 className='blue_heading'>Founder’s Story</h2>
        </div>
        <section className='aboutPageSection'>
        <div className='leftSection'>
          <img src={FounderIMage} alt='FounderiMage'/>
        </div>
        <div className='rightSection'>
          <p>Heaps of papers, complex procedures, endless causelists, and the echoes of ‘tareekh pe tareekh’ (adjournments) – these are commonplace sights and sounds of Indian courtrooms. Aman, Bhaven, and Namita witnessed these in multiple courtrooms again and again. It was a two-edged sword – while they had to live through the burdens of these inefficiencies, they also inspired them to create change and led to the birth of Presolv360.</p>
           <p>The tipping point was an incident in one such courtroom, where the judge told Bhaven, “Son, your father filed this case, and it is your child that will continue to fight it.” In that moment, despair turned into determination, and the three friends set out on a journey to change the narrative of dispute resolution.</p>
          <p>Presolv360 thus started with the vision of becoming a global leader in resolving disputes using technology. The heart of the founders’ vision for the company is using a blend of the latest technologies and human ingenuity to craft solutions that revolutionize the global justice landscape.</p>
        </div>
    </section>
    </div>
     
     {/**************Core Value Section ************* */}

    <div className='section_heading'>
          <h2 className='blue_heading'>OUR CORE VALUES</h2>
        </div>

        {
          window.innerWidth > 600 ?  <section className='aboutPageSection'>
          <div className='core_value_wrap'>

          
              {
                FlipCardData.map((data)=>{
                  return (
                    <FlipCard imageData={data} />
                  )
                })
              }
              </div>
        </section> : <><Mobile_corevalue/></>
        }
       

      {/**************Mile Stone Section ************* */}
        <section className='milestonesection' style={{backgroundColor:"var(--color_1)",padding:"2em 1em 4em 1em"}}>
        <div className='section_heading'>
          <h2 className='blue_heading'style={{color:"#fff"}}>MILESTONES</h2>
        </div>

        {
          window.innerWidth > 600 ? <>
           <svg width="40" height="81" viewBox="0 0 40 81" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="20" fill="#FBB04C"/>
  <line x1="20" y1="20" x2="20" y2="81" stroke="#FBB04C" stroke-width="4"/>
</svg>
<div className='milestoneCard'>
   <h2>2017</h2>
   <p>Blending research, innovation, tech, and empathy, Presolv360 was founded to make dispute resolution  simple and user-centric.</p>
</div>
<svg width="40" height="96" viewBox="0 0 40 96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="46" r="20" fill="#FBB04C"/>
  <line x1="20" y1="-8.74228e-08" x2="20" y2="96" stroke="#FBB04C" stroke-width="4"/>
</svg>
<div className='milestoneCard'>
   <h2>2020</h2>
   <p>Included as an ADR/ODR institution in the notification issued by Department of Legal Affairs, Ministry of Law and Justice.</p>
</div>
<svg width="40" height="96" viewBox="0 0 40 96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="46" r="20" fill="#FBB04C"/>
  <line x1="20" y1="-8.74228e-08" x2="20" y2="96" stroke="#FBB04C" stroke-width="4"/>
</svg>
<div className='milestoneCard'>
   <h2>2021</h2>
   <p>Empaneled as Mediation Institute by Main Mediation Centre, Bombay High Court and Maharashtra Legal Services Authority.</p>
</div>
<svg width="40" height="96" viewBox="0 0 40 96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="46" r="20" fill="#FBB04C"/>
  <line x1="20" y1="-8.74228e-08" x2="20" y2="96" stroke="#FBB04C" stroke-width="4"/>
</svg>
<div className='milestoneCard'>
   <h2>2022</h2>
   <p>Incubated by Cyril Amarchand Mangaldas and backed by marquee investors like Omidyar Network India, MGA Ventures</p>
</div>
<svg width="40" height="96" viewBox="0 0 40 96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="46" r="20" fill="#FBB04C"/>
  <line x1="20" y1="-8.74228e-08" x2="20" y2="96" stroke="#FBB04C" stroke-width="4"/>
</svg>
<div className='milestoneCard'>
   <h2>2023</h2>
   <p>At the onset, parties in 7,257 pin codes saved INR 362 million in costs and 7.8 million days following record participation and settlements</p>
</div>
          </>  : <><MileStone_mobile/></>
        }
       
         
         
        </section>
       
        <div className='section_heading' style={{paddingTop:"4em"}}>
          <h2 className='blue_heading'>ADVISORY COUNCIL</h2>
        </div>
        {
           window.innerWidth > 600 ?  <div className='guide_body_wrap'>
           <div className='guide_card'>
               <img  src={Image2} alt='Justice B.N. Srikrishna'/>
                 <h3 className='greyColor_text'>Justice B.N. Srikrishna</h3>
                 <p className='greyColor_text'>Judge (Retd.) Supreme Court of India</p>
               </div>
               <div className='guide_card'>
                 <img  src={Image1} alt='Justice U.U. Lalit'/>
                 <h3 className='greyColor_text'>Justice U.U. Lalit</h3>
                 <p className='greyColor_text'>Former Chief Justice of india</p>
               </div>
              
               <div className='guide_card'>
               <img  src={Image3} alt='Justice K. Kannan'/>
                 <h3 className='greyColor_text'>Justice K. Kannan</h3>
                 <p className='greyColor_text'>Judge (Retd.) Punjab & Haryana High Court</p>
               </div>
           </div> : <Slider {...settings} >
                <div>
                <div className='guide_card'>
               <img  src={Image2} alt='Justice B.N. Srikrishna'/>
                 <h3 className='greyColor_text'>Justice B.N. Srikrishna</h3>
                 <p className='greyColor_text'>Judge (Retd.) Supreme Court of India</p>
               </div>
                </div>
                <div>
                <div className='guide_card'>
                 <img  src={Image1} alt='Justice U.U. Lalit'/>
                 <h3 className='greyColor_text'>Justice U.U. Lalit</h3>
                 <p className='greyColor_text'>Former Chief Justice of india</p>
               </div>
                </div>
                <div>  <div className='guide_card'>
               <img  src={Image3} alt='Justice K. Kannan'/>
                 <h3 className='greyColor_text'>Justice K. Kannan</h3>
                 <p className='greyColor_text'>Judge (Retd.) Punjab & Haryana High Court</p>
               </div></div>
           </Slider>
        }
          <div className='section_heading'>
          <h2 className='blue_heading'>ADVISORY BOARD</h2>
        </div>




        {
           window.innerWidth > 600 ?  <div className='guide_body_wrap'>
           <div className='guide_card'>
               <img  src={Pradeep} alt='Justice Pradeep Nandrajog'/>
                 <h3 className='greyColor_text'>Justice Pradeep Nandrajog</h3>
                 <p className='greyColor_text'>Chief Justice (Retd.) Bombay High Court</p>
               </div>
               <div className='guide_card'>
                 <img  src={Srinath} alt='Mr Srinath Sridharan'/>
                 <h3 className='greyColor_text'>Mr Srinath Sridharan</h3>
                 <p className='greyColor_text'>Corporate Leader, CXO Coach</p>
               </div>
              
               <div className='guide_card'>
               <img  src={Ashok} alt='Mr Ashok Barat'/>
               <h3 className='greyColor_text'>Mr Ashok Barat</h3>
                 <p className='greyColor_text'>Former MD & CEO, Forbes & Company Ltd</p>
               </div>
           </div> : <Slider {...settings} >
                <div>
                <div className='guide_card'>
                <img  src={Pradeep} alt='Justice Pradeep Nandrajog'/>
               <h3 className='greyColor_text'>Justice Pradeep Nandrajog</h3>
                 <p className='greyColor_text'>Chief Justice (Retd.) Bombay High Court</p>
               </div>
                </div>
                <div>
                <div className='guide_card'>
                <img  src={Srinath} alt='Mr Srinath Sridharan'/>
                 <h3 className='greyColor_text'>Mr Srinath Sridharan</h3>
                 <p className='greyColor_text'>Corporate Leader, CXO Coach</p>
               </div>
                </div>
                <div>  <div className='guide_card'>
                <img  src={Ashok} alt='Mr Ashok Barat'/>
               <h3 className='greyColor_text'>Mr Ashok Barat</h3>
                 <p className='greyColor_text'>Former MD & CEO, Forbes & Company Ltd</p>
               </div></div>
           </Slider>
        }


           {
           window.innerWidth > 600 ?  <div className='guide_body_wrap'>
           <div className='guide_card'>
               <img  src={Tanu} alt='Ms Tanu Mehta'/>
                 <h3 className='greyColor_text'>Ms Tanu Mehta</h3>
                 <p className='greyColor_text'>Legal Counsel, Mediator and Conciliator</p>
               </div>
               <div className='guide_card'>
                 <img  src={Ankit} alt='Mr Ankit Sahni'/>
                 <h3 className='greyColor_text'>Mr Ankit Sahni</h3>
                 <p className='greyColor_text'>Principal, Ajay Sahni Associates LLP </p>
               </div>
              
               <div className='guide_card'>
               <img  src={Raman} alt='Mr Raman Aggarwal'/>
               <h3 className='greyColor_text'>Mr Raman Aggarwal</h3>
                 <p className='greyColor_text'>Director – FIDC, ST Consultant – World Bank </p>
               </div>
           </div> : <Slider {...settings} >
                <div>
                <div className='guide_card'>
                <img  src={Tanu} alt='Ms Tanu Mehta'/>
                 <h3 className='greyColor_text'>Ms Tanu Mehta</h3>
                 <p className='greyColor_text'>Legal Counsel, Mediator and Conciliator</p>
               </div>
                </div>
                <div>
                <div className='guide_card'>
                <img  src={Ankit} alt='Mr Ankit Sahni'/>
                 <h3 className='greyColor_text'>Mr Ankit Sahni</h3>
                 <p className='greyColor_text'>Principal, Ajay Sahni Associates LLP </p>
               </div>
                </div>
                <div>  <div className='guide_card'>
                <img  src={Raman} alt='Mr Raman Aggarwal'/>
               <h3 className='greyColor_text'>Mr Raman Aggarwal</h3>
                 <p className='greyColor_text'>Director – FIDC, ST Consultant – World Bank </p>
               </div></div>
           </Slider>
        }
          
          <div className='advisory_wrap'>
          <div className='guide_card'>
               <img  src={Rajni} alt='Late Ms Rajani Iyer' style={{width:"350px"}}/>
                 <h3 className='greyColor_text'>Late Ms Rajani Iyer</h3>
                 <p className='greyColor_text'>Former Advisor , Senior Counsel and Mediator </p>
               </div>
          </div>

         <div className='section_heading' style={{padding:"5em"}}>
          <h2 className='blue_heading'>Meet the Founders</h2>
        </div>
        {
           window.innerWidth > 600 ?  <div className='guide_body_wrap'>
           <div className='guide_card'>
               <img  src={Image4} alt='Bhaven Shah'/>
                 <h3 className='greyColor_text'>Bhaven Shah</h3>
                 <p className='greyColor_text'>Head - Legal and Strategy</p>
               </div>
               <div className='guide_card'>
                 <img  src={Image5} alt='Namita Shah'/>
                 <h3 className='greyColor_text'>Namita Shah</h3>
                 <p className='greyColor_text'>Head - Product & Finance</p>
               </div>
              
               <div className='guide_card'>
               <img  src={Image6} alt='Aman Sanghavi'/>
                 <h3 className='greyColor_text'>Aman Sanghavi</h3>
                 <p className='greyColor_text'>Head - Business & Operations</p>
               </div>
           </div> : <Slider {...settings} >
                <div>
                <div className='guide_card'>
               <img  src={Image4} alt='Bhaven Shah'/>
               <h3 className='greyColor_text'>Bhaven Shah</h3>
                 <p className='greyColor_text'>Head - Legal and Strategy</p>
               </div>
                </div>
                <div>
                <div className='guide_card'>
                 <img  src={Image5} alt='Namita Shah'/>
                 <h3 className='greyColor_text'>Namita Shah</h3>
                 <p className='greyColor_text'>Head - Product & Finance</p>
               </div>
                </div>
                <div><div className='guide_card'>
               <img  src={Image6} alt='Aman Sanghavi'/>
               <h3 className='greyColor_text'>Aman Sanghavi</h3>
                 <p className='greyColor_text'>Head - Business & Operations</p>
               </div></div>
           </Slider>
        }

    </div>
  )
}
