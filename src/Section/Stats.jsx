import React, { useEffect } from 'react'
import StatsCard from '../components/card/StatsCard'
import ScrollTrigger from 'react-scroll-trigger'
import Slider from "react-slick";
import Images1 from '../assets/Images/Bombay High Court.png'
import Images2 from '../assets/Images/Med2.png'
import Images3 from '../assets/Images/MOL.png'
import Images4 from '../assets/Images/ONDC.png'
import Images5 from '../assets/Images/Sahamati.png'
import Images6 from '../assets/Images/CDSL.png'
import Images7 from '../assets/Images/Kerala High court.png'
import CountUp from "react-countup"
import { useState } from 'react'
import Marqueee from '../components/marquee';

export const CradDetail = [
  {
    records: 1.2,
    description1: "Resolutions facilitated at",
    description2: "pre-litigation stage",
    sign: "$"
  },
  {
    records: 9300,
    description1: "PIN codes",
    description2: "served",
    sign: "+"
  },
  {
    records: 65,
    description1: "Saving in time and cost from",
    description2: "traditional resolution forums",
    sign: "%"
  }
  ,
  {
    records: 7,
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
    dotsClass: 'sliderDots',
    customPaging: i => (
      <div
      >
        {i + 1}
      </div>
    )
  }

  const Dataofmarquee = [
    {
      img: Images1,

    },
    {
      img: Images2,
    }, {
      img: Images3,
    }, {
      img: Images4,

    }, {
      img: Images5,

    }, {
      img: Images6,

    },
    {
      img: Images7,

    },
  ]
  return (
    <>
      {
        window.innerWidth > 600 ? <>   <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className='stats_wrap'>

            <div className='stats_card_wrap'>
              <h3>
                $
                {counterOn && <CountUp start={0} end={1} duration={2} delay={0} />}
                .2 Bn
              </h3>

              <p>disputes under</p>
              <p>management</p>
            </div>
            <div className='stats_card_wrap'>
              <h3>
                {counterOn && <CountUp start={100} end={9300} duration={2} delay={0} />}
                +
              </h3>

              <p>PIN codes</p>
              <p>served</p>
            </div>
            <div className='stats_card_wrap'>
              <h3>
                {counterOn && <CountUp start={30} end={65} duration={2} delay={0} />}
                %
              </h3>

              <p>savings in time</p>
              <p>and cost</p>
            </div>
            <div className='stats_card_wrap'>
              <h3>
                {counterOn && <CountUp start={0} end={7} duration={2} delay={0} />}
                X
              </h3>

              <p>increase in</p>
              <p>participation</p>
            </div>

            {/* {
           CradDetail.map((ele) => {
             return (
               <StatsCard svg={ele.svg} records={ele.records} sign={ele.sign} counter={counterOn} description1={ele.description1} description2={ele.description2} />
             )

           })
         } */}

          </div>

        </ScrollTrigger>
        </> : <>  <div className='stats_wrap'> <Slider {...settings}>

          <div>
            <div className='stats_card_wrap'>
              <h3>
                $ 1.2 Bn
              </h3>
              <p>disputes under</p>
              <p>management</p>
            </div>
          </div>

          <div><div className='stats_card_wrap'>
            <h3>
              9300+
            </h3>

            <p>PIN codes</p>
            <p>served</p>
          </div></div>
          <div>
            <div className='stats_card_wrap'>
              <h3>
                65
                %
              </h3>

              <p>savings in time</p>
              <p>and cost</p>
            </div>
          </div>
          <div>
            <div className='stats_card_wrap'>
              <h3>
                7X
              </h3>

              <p>increase in</p>
              <p>participation</p>
            </div>
          </div>
        </Slider>
        </div>


        </>
      }
      <div className='section_heading'>
        <h2 className='blue_heading' >Recognition & Empanelment</h2>
      </div>
      <div style={{ padding: "1em", paddingBottom: "3em" }}>
        <Marqueee data={Dataofmarquee} />
      </div>
    </>
  )
}

