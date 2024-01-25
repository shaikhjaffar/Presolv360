import React, { useCallback, useEffect, useRef, useState } from 'react'

import Image1 from '../assets/Images/About Us 1.png'
import Image2 from '../assets/Images/About Us 2 Image New.png'
import Image3 from '../assets/Images/About Us 3 Image.png'
import Image4 from '../assets/Images/About Us 4 Image.png'
import About_phoneSection from '../components/landing_Phone_view/About_phoneSection';
import Slider from 'react-slick';
import ImageSequence from '../components/ImageSequence';



const slides = [
  {
    title: 'An automation powered online platform that is taking dispute resolution to the fingertips of businesses and individuals alike',
    image: Image1,
  },
  {
    title: 'Facilitated resolutions in financial, consumer, family, insurance, real estate and MSME disputes since inception',
    image: Image2,
  },
  {
    title: 'The platform creates a level-playing field by promoting participation from remote locations and diverse socio-economic backgrounds',
    image: Image3,
  },
  {
    title: 'Resultantly, parties are able to achieve timely resolution of their dispute, while drastically reducing the cost involved in resolving them',
    image:Image4,
  },
];


export default function About() {
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
    <div className='section about_section_main_wrap'>
    <div className='section_heading'>
        <h2 className='blue_heading' >Who we are </h2>
    </div>
    { window.innerWidth > 800 ?  <Slider {...settings}>
      {
        slides.map((ele)=>{
          return (
            <>
           
            <div className='about_slide_main_wrap'>
     <div className='about_slide_content'>
      <h2>{ele.title}</h2>                                     
      <button className='orange_btn' style={{width:"120px"}}>Learn More</button>
     </div>
     <div className='about_slide_img_wrap'>
      <img src={ele.image} alt='image' />
     </div>
  </div>
  </>
          )
        })
      }
    </Slider> : <About_phoneSection data={slides}/>}
    </div>
  )
}
