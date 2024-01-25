import React, { useEffect, useState } from 'react'
import Image1 from '../assets/Images/environment.png'
import Image2 from '../assets/Images/Impact_2.gif'
import Image3 from '../assets/Images/Impact_3.gif'
import { inView } from 'framer-motion'
export default function Outcome() {

  

    function showDataAccordian1(id) {
        let question = document.getElementById(id)
        let icon = question.querySelector(".icon-shape1");
        const active = document.querySelector(".faq_question1.active_acc1");
        const activeIcon = document.querySelector(".icon-shape1.active_acc1");

        if (active && active !== question) {
            active.classList.toggle("active_acc1");
            activeIcon.classList.toggle("active_acc1");
            active.nextElementSibling.style.maxHeight = 0;

        }

        question.classList.toggle("active_acc1");
        icon.classList.toggle("active_acc1");

        const answer = question.nextElementSibling;

        if (question.classList.contains("active_acc1")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    }

    useEffect(() => {
        inView(document.getElementById('outcome_child_2'), () => {
            showDataAccordian1('outcome_child_1')
        })

    }, [])

    return (
        <div className='accordian_section section'>
            <div className='section_heading'>
                <h2 className='blue_heading'>Transformative Outcomes</h2>
            </div>
            <div  className='outcome_mobile_img'
            
            
            ><img src={Image1} style={{width:"75%"}} alt="Image1" /></div>
      
            <div className='accordian_section_body'>

                <div className='accordian_section_wrap'>
                    <div className="faq_main_container">
                        <div className="faq_container">
                            <div className="faq_question1" id='outcome_child_1' data="0" onClick={() => { showDataAccordian1('outcome_child_1') }}>
                                <div className="faq_question-text">
                                    <h3>Environmental</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape1"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <ul>
                                        <li>20.3 million <span> sheets of paper Saved</span></li>
                                        <li>2442 trees <span> Saved</span></li>
                                        <li>203 million Liters <span> of water</span></li>
                                        <li>8526 pounds of air pollution <span> prevented due to paper manufacturing process</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="faq_container">
                            <div className="faq_question1" id='outcome_child_2' data="1" onClick={() => { showDataAccordian1('outcome_child_2') }}>
                                <div className="faq_question-text">
                                    <h3>Economical</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape1"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">

                                    <ul>
                                        <li>Rs. 853 million<span>  disputing parties saved in costs by resolving dispute online</span></li>
                                        <li>25.24 million days <span>saved due to quicker resolution</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="faq_container">
                            <div className="faq_question1" id='outcome_child_3' data="2" onClick={() => { showDataAccordian1('outcome_child_3') }}>
                                <div className="faq_question-text">
                                    <h3>Social</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape1"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">

                                    <ul>
                                        <li>12+ regional languages<span>  integrated to make dispute resolution process more accessible</span></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <img src={Image1} style={{width:"75%"}} alt="Image1" />
                </div>

            </div>

        </div>
    )
}
