import React from 'react'
import AnimatedBox from '../../components/AnimatedBox'

export default function OdrTv() {
  return (
    <div className='odrTvpage'>
       <section className='landing_wrap firstBreak'>
       {
        window.innerWidth > 600 ?   <h1>
      Watch our Youtube Shorts and Videos on Presolv360 Channel
        </h1> :   <h1 style={{padding:"0 .5em",fontSize:"32px"}}>
        Watch our Youtube Shorts and Videos on Presolv360 Channel
        </h1>
       }
      
         {/* <h3><span style={{color:"var(--color_2)"}}>#SettleTheBattle</span></h3> */}
         <AnimatedBox/>
    </section>
    <section className='content_odrTv'>
      <ul>
        <li>Shorts</li>
        <li>Videos</li>
      </ul>

      <div className='body_section_OdrTv'>
        <div className='child_content_wrap'>
            <div>
            <img src='' alt=''/>
            </div>
          <div>
            <h2></h2>
            <p></p>
            <button>Watch</button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
