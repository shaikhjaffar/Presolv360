import React ,{ useEffect } from 'react'
import './section.css'
import { motion } from "framer-motion"
import EnquiryModal from '../components/EnquiryModal';
import AnimatedBox from '../components/AnimatedBox';
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
        Online dispute resolution platform <br></br> to resolve legal disputes and <br></br> achieve settlements in record time
        {/* Dispute resolution digitized,<br></br> simplified and at your fingertips */}
        </h1>
        <p>Easy. Efficient. Enforceable.</p>
        <div className='flex_row btn_wrp'>
         
        <button className='orange_btn' style={{minHeight:"42px"}}>
        Discover More
        </button>
     
        <EnquiryModal/>
      
        </div>
        <AnimatedBox/>
    
      
    </section>
  )
}
