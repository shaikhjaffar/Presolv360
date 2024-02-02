import React, { useEffect } from 'react'
import Slider from "react-slick";
import './style.css'
import StatsCard from '../card/StatsCard';
import { CradDetail } from '../../Section/Stats';
import Reveal from '../../utils/Reveal';
export default function About_phoneSection({ data }) {
   
  

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
        )
    };
    return (
        <>
       
        <Slider {...settings}>
            {
                data.map((element) => {
                    return (
                        <div>


                            <div className='about_mobile_section'>
                                <h3>{element.title}</h3>
                                <img  src={element.image} style={{ width: "100%" }} />
                                <button className='orange_btn'>Learn More</button>
                            </div>
                        </div>
                    )
                })
            }

        </Slider>
       
        </>
    )
}
