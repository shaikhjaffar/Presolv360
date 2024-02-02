import React, { useEffect, useState } from 'react'
import Image1 from '../assets/Images/environment.png'
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
                <h2 className='blue_heading'>Transformative Impact</h2>
            </div>
            <div className='outcome_mobile_img'


            ><img src={Image1} style={{ width: "75%" }} alt="Image1" /></div>

            <div className='accordian_section_body'>

                <div className='accordian_section_wrap'>
                    <div className="faq_main_container">
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
                                        <li>Rs. 835 million<span> saved in costs by resolving dispute online</span></li>
                                        <li>38 million days <span> saved due to quicker resolution</span></li>
                                        <li>Rs. 1571 million <span> wage and business loss averted by avoiding litigation</span></li>
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
                                        <li>4x increase<span> in amicable settlements</span></li>
                                        <li>80% success rate<span> in pre-institution commercial mediation</span></li>
                                        <li>12+ regional languages<span> integrated for increased accessibility</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                                        <li>20 million <span> sheets of paper saved</span></li>
                                        <li>2,442 trees <span> saved</span></li>
                                        <li>203 million litres <span> of water saved</span></li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Image1} style={{ width: "75%" }} alt="Image1" />
                </div>

            </div>

        </div>
    )
}
