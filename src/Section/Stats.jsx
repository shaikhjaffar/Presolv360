import React from 'react'
import StatsCard from '../components/card/StatsCard'
import ScrollTrigger from 'react-scroll-trigger'
import Slider from "react-slick";
import Images1 from '../assets/Images/Med1.png'
import Images2 from '../assets/Images/Med2.png'
import Images3 from '../assets/Images/Med3.png'
import { useState } from 'react'

 export const  CradDetail = [
  {
    records: 180000,
    description1: "Resolutions facilitated at",
    description2: "pre-litigation stage",
    sign: " +"
  },
  {
    records: 9300,
    description1: "Pin codes  served",
    description2: "served",
    sign: " +"
  },
  {
    records: 65,
    description1: "Saving in time & cost from",
    description2: "traditional resolution forums",
    sign: "%"
  }
  ,
  {
    records: 40,
    description1: "Rise in participation from",
    description2: "offline to online proceedings",
    sign: "X"
  }
]

export default function Stats() {
  const [counterOn, setCounterOn] = useState(false)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    arrows: false,
    dotsClass:'sliderDots',
    customPaging: i => (
      <div
      >
        {i + 1}
      </div>
    )}


  return (
    <>
     {
       window.innerWidth > 600  ? <>   <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
       <div className='stats_wrap'>

         {
           CradDetail.map((ele) => {
             return (
               <StatsCard svg={ele.svg} records={ele.records} sign={ele.sign} counter={counterOn} description1={ele.description1} description2={ele.description2} />
             )

           })
         }

       </div>

     </ScrollTrigger>  
   
      <Slider {...settings}>

        <div>
        <div className='section_heading'>
        <h3 style={{fontSize:"1.8vw",color:"var(--color_1)"}}>Empanelled as a Mediation Institution with</h3>
      </div>
        <div className='stats_wrap' style={{paddingTop:"0",paddingLeft:"0"}}>
        <div className='stats_card'>
          <img src={Images1}  alt=""  />
          <p>Main Mediation Centre </p>
          <p>High Court of Bombay</p>
        </div>
        <div  className='stats_card'>
          <img src={Images3} alt="" />
          <p>Kerala State Mediation and Conciliation Centre </p>
          <p>High Court of Kerala</p>
          
        </div>
        <div  className='stats_card'>
          <img src={Images2} alt="" />
          <p>District Legal Services Authority </p>
          <p>Mumbai & Dhule</p>
        </div>
   
      </div>
      </div>
        <div>
        <div className='stats_content'>
        <div className='section_heading'>
        <h3 style={{fontSize:"1.8vw",color:"var(--color_1)"}}>Empanelled as  an Online Dispute Resolution Service Provider with</h3>
      </div>
        <p><span className='highlight_blue'>Central Depository Services Limited</span>  to resolve
          investor grievances under <span className='highlight_blue'> <br></br>Securities and Exchange Board of India’s </span> grievance redressal mechanism</p>
        <p><span className='highlight_blue'> Open Network for Digital Commerce ecosystem</span></p>
        <p><span className='highlight_blue'> Account Aggregator ecosystem </span> </p>
      </div>
        </div>
   
      </Slider> </> : <>  <div className='stats_wrap'> <Slider {...settings}>
            {
                CradDetail.map((ele) => {
                    return (
                        <div>
<StatsCard svg={ele.svg} records={ele.records} sign={ele.sign} counter={true} description1={ele.description1} description2={ele.description2} />
                        </div>
                    )
                })
            }
          
        </Slider>
        </div>
        <div className='section_heading'>
        <h3 style={{fontSize:"24px",color:"var(--color_1)",textAlign:"center"}}>Empanelled as a <br></br>Mediation Institution with</h3>
      </div>
        <Slider {...settings}>
      
          <div>
          <div className='stats_card' style={{paddingBottom:"1em"}}>
          <img src={Images1}  alt=""  />
          <p>Main Mediation Centre </p>
          <p>High Court of Bombay</p>
        </div>

          </div>
       <div>
       <div  className='stats_card'>
          <img src={Images3} alt="" />
          <p>Kerala State Mediation and Conciliation Centre </p>
          <p>High Court of Kerala</p>
          
        </div>
       </div>
       <div>
       <div  className='stats_card'>
          <img src={Images2} alt=""/>
          <p>District Legal Services Authority </p>
          <p>Mumbai & Dhule</p>
        </div>

       </div>
     
      </Slider>
      <div className='section_heading'>
        <h3 style={{fontSize:"24px",color:"var(--color_1)",textAlign:"center"}}>Empanelled as  an <br></br> Online Dispute Resolution Service Provider with</h3>
      </div>
      <div className='stats_content'>
        <p><span className='highlight_blue'>Central Depository Services Limited</span>  to resolve
          investor grievances under <span className='highlight_blue'> Securities and Exchange Board of India’s </span> grievance redressal mechanism</p>
        <p> <span className='highlight_blue'> Open Network for Digital Commerce ecosystem</span></p>
        <p><span className='highlight_blue'> Account Aggregator ecosystem </span> </p>
      </div>
        </>
     }
    
    
   
     

    </>
  )
}

