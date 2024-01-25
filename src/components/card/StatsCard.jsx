import React, { useEffect } from 'react'
import './style.css'
import { useState } from 'react'
import CountUp from "react-countup"

export default function StatsCard(props) {
  
  return (
    <div className='stats_card_wrap'>
      <h3>
      {props.counter && <CountUp start={100} end={props.records} duration={2} delay={0}/>} 
      {props.sign}
        </h3>

      <p>{props.description1}</p>
      <p>{props.description2}</p>
    </div>
  )
}
