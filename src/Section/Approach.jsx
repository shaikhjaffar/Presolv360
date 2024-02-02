import React, { useEffect } from 'react'
import { inView } from 'framer-motion'
import Image1 from '../assets/Images/Approach1.png'
import Image2 from '../assets/Images/Second.png'
import Image3 from '../assets/Images/Third.png'
import Image4 from '../assets/Images/Fourth.png'
import { useState } from 'react'
export default function Approach() {
    const [acc_image, setImage] = useState(Image1)

    const accrodianImages = [
        Image1, Image2, Image3, Image4
    ]
    function showDataAccordian(id) {
        let question = document.getElementById(id)
        let icon = question.querySelector(".icon-shape");
        const active = document.querySelector(".faq_question.active_acc");
        const activeIcon = document.querySelector(".icon-shape.active_acc");

        if (active && active !== question) {
            active.classList.toggle("active_acc");
            activeIcon.classList.toggle("active_acc");
            active.nextElementSibling.style.maxHeight = 0;
        }

        question.classList.toggle("active_acc");
        icon.classList.toggle("active_acc");

        const answer = question.nextElementSibling;

        if (question.classList.contains("active_acc")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            setImage(accrodianImages[question.getAttribute('data')])
        } else {
            answer.style.maxHeight = 0;
        }
    }

    useEffect(() => {
        inView(document.getElementById('approach_child_4'), () => {
            showDataAccordian('approach_child_1')
        })

    }, [])
    return (
        <div className='accordian_section section'>
            <div className='section_heading'>
                <h2 className='blue_heading'>360° approach to dispute resolution </h2>
            </div>
            <div className='accordian_section_body' >
                <div className='accordian_section_wrap' style={{ gridTemplateColumns: "45% 45%" }}>
                    <img src={acc_image} alt="image1" style={{ width: "100%" }} />
                    <div className="faq_main_container">
                        <div className="faq_container">
                            <div className="faq_question" id='approach_child_1' data="0" onClick={() => { showDataAccordian('approach_child_1') }}>
                                <div className="faq_question-text">
                                    <h3>End-to-end cloud platform</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <p>
                                        From dispute initiation to resolution, our integrated platform is user-centric and ensures a seamless experience for all stakeholders
                                    </p>
                                    <img src={Image1} alt="image1" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div className="faq_container">
                            <div className="faq_question" id='approach_child_2' data="1" onClick={() => { showDataAccordian('approach_child_2') }}>
                                <div className="faq_question-text">
                                    <h3>Process automation</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <p>
                                        Legal processes can get lengthy and tedious. Leverage automation and workflow management to experience a consistent, fair and simple resolution process
                                    </p>     <img src={Image2} alt="image1" style={{ width: "100%" }} />   </div>
                            </div>
                        </div>
                        <div className="faq_container">
                            <div className="faq_question" id='approach_child_3' data="2" onClick={() => { showDataAccordian('approach_child_3') }}>
                                <div className="faq_question-text">
                                    <h3>Omni-channel communications</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <p>
                                        Communication is the bridge between dispute and resolution. Our multi-channel integration and multilingual capabilities enable participation, even from the remotest geographies       </p>
                                        <img src={Image3} alt="image1" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div className="faq_container">
                            <div className="faq_question" id='approach_child_4' data="3" onClick={() => { showDataAccordian('approach_child_4') }}>
                                <div className="faq_question-text">
                                    <h3>Certified and compliant</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <p>
                                    Data privacy and security is at the heart of our functioning. We are ISO-certified, GDPR-compliant and in congruence with data protection laws, thereby enhancing trust                                  </p>   <img src={Image4} alt="image1" style={{ width: "100%" }} />     </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
