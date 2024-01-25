import React from 'react'
import './style.css'
export default function FlipCard({imageData}) {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <h2>{imageData.tittle}</h2>
      </div>
      <div className="flip-card-back">
       <p>{imageData.description}</p> 
      </div>
    </div>
  </div> 
  )
}
