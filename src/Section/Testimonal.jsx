import React, { useEffect } from 'react'
import Slider from 'react-slick'

export default function Testimonal() {
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
        )}


 

  return (
    <div className='section'>
    <div className='section_heading'>
       <h2 className='blue_heading'>Hear from our users</h2>
     </div>
     <div id="testim-content" className="cont">
     <Slider {...settings}>
     <div>
        <div className='tesminol_wrap'>
        <div className="testimonal_card">
                    <span>&#8220;</span>
                     <p> &nbsp;  &nbsp;  &nbsp;Most MSME’s are unaware of their legal rights and hence are unable to resolve disputes in an expedited fashion. We were also in the same boat, but Presolv360’s offering was just the solution we needed. The team was diligent and extremely helpful through the entire dispute resolution process, providing the support we needed to ensure a solution was found. Thanks to Presolv360, our longstanding dispute was resolved in a very short time. I sincerely hope Presolv360 will be able to work with more MSME’s to help resolve their disputes as well.  </p>   
                          <h5>Vaibhav Garg, Proprietor</h5>  
                          <h5>MSME Unit</h5>                 
                    </div>
        </div>
  
     </div>
     <div>
     <div className='tesminol_wrap'>
     <div className="testimonal_card">
                    <span>&#8220;</span>
                     <p> &nbsp;  &nbsp;  &nbsp;The results of online arbitration were very encouraging – it helped us understand the platform better, we got insights on how we should go about doing this (integrating ODR), and even the response from customers, as compared to the traditional arbitration that we typically do, was much better. When it comes to online mediation, we have seen very good results – the recoveries, and responses, from customers are very encouraging. </p>   
                          <h5> Mr Sarath Mohan</h5>  
                          <h5>HDFC Bank, Head Legal (Retail)</h5>                 
                    </div>
     </div>
     </div>
     <div>
     <div className='tesminol_wrap'>
     <div className="testimonal_card">
                    <span>&#8220;</span>
                     <p> &nbsp; &nbsp; &nbsp;Our case was referred to Presolv360 by the Bombay High Court Mediation Centre. My client was Taiwan based and the other party was Indian. Presolv360 helped in bridging the gap by appointing a mediator and hosting the mediation online. The administration and case manager was very efficient & quick. The online case filing process with Presolv360 is very easy and hassle free, making the entire experience of resolving disputes very pleasing.</p>   
                          <h5> Mr. Sagar Kulkarni</h5>  
                          <h5>Advocate</h5>                 
                    </div>
                    </div>
     </div>
     </Slider>
     </div>

 </div>

  )
}
