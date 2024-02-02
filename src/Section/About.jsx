import React, { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Image1 from '../assets/Images/About Us 1.png'
import Image2 from '../assets/Images/About Us 2 Image New.png'
import Image3 from '../assets/Images/About Us 3 Image.png'
import Image4 from '../assets/Images/About Us 4 Image.png'
import About_phoneSection from '../components/landing_Phone_view/About_phoneSection';
import Slider from 'react-slick';
import ImageSequence from '../components/ImageSequence';



const slides = [
  {
    title: "India's leading platform that uses the power of technology and human expertise to deliver resolutions of your disputes",
    image: Image1,
  },
  {
    title: 'Whether it is money recovery, property, insurance, employment or any other civil dispute, we have a solution for you',
    image: Image2,
  },
  {
    title: 'Experience high resolution rates through participation across geographies and diverse socio-economic backgrounds ',
    image: Image3,
  },
  {
    title: 'Achieve enforceable outcomes in a timely manner, while drastically reducing the cost in resolving your dispute',
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
    lazyLoad:'ondemand',
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
      <h2 >{ele.title}</h2>  
      <NavLink exact  to="/About_us"><button className='orange_btn'>Learn More</button></NavLink>                                    
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
