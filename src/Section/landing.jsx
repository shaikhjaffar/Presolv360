import React from 'react'
import './section.css'
import { motion } from "framer-motion"
import EnquiryModal from '../components/EnquiryModal';
// import Logo1 from '../assets/Images/Logo1.png'
// import Logo4 from '../assets/Images/Logo4.png'

export default function Landing() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className=' section landing_wrap'>
        {/* <img src={Logo1} alt='logo1'/>
        <img src={Logo4} alt='logo4'/> */}
        <h1>
        Dispute resolution digitized,<br></br> simplified and at your fingertips
        </h1>
        <p>Easy Efficient Enforceable</p>
        <div className='flex_row btn_wrp'>
        
        <button className='orange_btn' style={{minHeight:"42px"}}>
        Discover More
        </button>
     
        <EnquiryModal/>
      
        </div>
        <div className='animated_box'>
        <svg width="60" className='svgdots' height="106" viewBox="0 0 80 116" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4" cy="4" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="22" cy="4" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="40" cy="4" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="58" cy="4" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="76" cy="4" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="4" cy="22" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="22" cy="22" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="40" cy="22" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="58" cy="22" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="76" cy="22" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="4" cy="40" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="22" cy="40" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="40" cy="40" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="58" cy="40" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="76" cy="40" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="4" cy="58" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="22" cy="58" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="40" cy="58" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="58" cy="58" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="76" cy="58" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="4" cy="76" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="22" cy="76" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="40" cy="76" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="58" cy="76" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="76" cy="76" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="4" cy="94" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="22" cy="94" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="40" cy="94" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="58" cy="94" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="76" cy="94" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="4" cy="112" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="22" cy="112" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="40" cy="112" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="58" cy="112" r="4" fill="#005186" fill-opacity="0.5"/>
  <circle cx="76" cy="112" r="4" fill="#005186" fill-opacity="0.5"/>
</svg>
<svg className='svgcircle' width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="30" fill="#005186" fill-opacity="0.2"/>
</svg>

<svg width="60" className='dots2' height="106" viewBox="0 0 80 116" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4" cy="4" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="22" cy="4" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="40" cy="4" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="58" cy="4" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="76" cy="4" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="4" cy="22" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="22" cy="22" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="40" cy="22" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="58" cy="22" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="76" cy="22" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="4" cy="40" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="22" cy="40" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="40" cy="40" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="58" cy="40" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="76" cy="40" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="4" cy="58" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="22" cy="58" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="40" cy="58" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="58" cy="58" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="76" cy="58" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="4" cy="76" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="22" cy="76" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="40" cy="76" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="58" cy="76" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="76" cy="76" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="4" cy="94" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="22" cy="94" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="40" cy="94" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="58" cy="94" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="76" cy="94" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="4" cy="112" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="22" cy="112" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="40" cy="112" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="58" cy="112" r="4" fill="#FBB04C" fill-opacity="0.5"/>
  <circle cx="76" cy="112" r="4" fill="#FBB04C" fill-opacity="0.5"/>
</svg>
<svg className='circle2dots' width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="30"  transform="rotate(-0.632136 53.0002 53)" fill="#FBB04C" fill-opacity="0.2"/>
</svg>

        </div>
    
      
    </section>
  )
}
