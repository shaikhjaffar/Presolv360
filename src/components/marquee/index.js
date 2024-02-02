import React from "react"
import Marquee from "react-fast-marquee"
import "./style.css"
function Marqueee({data}) {
    return (
        <div className="card1" >   
        <Marquee  direction="left"  speed={60.45}>
          {
            data.map((element,index)=>{
                   return (
                    <img className="marquee_img" key={index} src={element.img} alt={element.img.split('/').splice(-1)} />
                   )
            })
          }

        </Marquee>
        </div>
    )
}

export default Marqueee