import React, { useEffect } from 'react'
import { inView } from 'framer-motion'
import Image1 from '../assets/Images/Approach1.png'
import Image2 from '../assets/Images/Approach1.png'
import Image3 from '../assets/Images/Approach1.png'
import Image4 from '../assets/Images/Approach1.png'
import { useState } from 'react'
export default function Mobile_offer() {
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
        inView(document.getElementById('offer_mobile_child_4'), () => {
            showDataAccordian('offer_mobile_child_1')
        })

    }, [])
    return (
        <div className='accordian_section section'>
            <div className='accordian_section_body' >
                <div className='accordian_section_wrap' style={{ gridTemplateColumns: "45% 45%" }}>
                    <img src={acc_image} alt="image1" style={{ width: "100%" }} />
                    <div className="faq_main_container">
                        <div className="faq_container">
                            <div className="faq_question" id='offer_mobile_child_1' data="0" onClick={() => { showDataAccordian('offer_mobile_child_1') }}>
                                <div className="faq_question-text">
                                    <h3 style={{ color: "#fff" }}>Negotiation</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <h3>Seamlessly negotiate and settle commercial disputes digitally</h3>
                                    <p>
                                    Determine a settlement offer and propose it to the other party over digital channels along with the payment link. AI-driven negotiation of the settlement terms and provision to make payment. Close the dispute by executing a settlement agreement. Negotiating made simpler, accessible and intuitive.
                                    </p>
                                    <img src={Image1} alt="image1" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div className="faq_container">
                            <div className="faq_question" id='offer_mobile_child_2' data="1" onClick={() => { showDataAccordian('offer_mobile_child_2') }}>
                                <div className="faq_question-text">
                                    <h3 style={{ color: "#fff" }}>Mediation</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <h3>Reach a mutually-beneficial outcome from the comfort of your home and workplace</h3>
                                    <p>
                                    Attempt an amicable resolution of your dispute before knocking the doors of courts. With confidentiality and data security at the core of our platform, parties have leveraged our digital infrastructure and panel of mediators and obtained a resolution in as less as 30 days.                                                </p>     <img src={Image2} alt="image1" style={{ width: "100%" }} />   </div>
                            </div>
                        </div>
                        <div className="faq_container">
                            <div className="faq_question" id='offer_mobile_child_3' data="2" onClick={() => { showDataAccordian('offer_mobile_child_3') }}>
                                <div className="faq_question-text">
                                    <h3 style={{ color: "#fff" }}>Arbitration</h3>
                                </div>
                                <div className="icon">
                                    <div className="icon-shape"></div>
                                </div>
                            </div>
                            <div className="answercont">
                                <div className="answer">
                                    <h3>
                                    Obtain an enforceable outcome by opting for institutional online arbitration
                                    </h3>
                                    <p>
                                    Use smart case management tools, task automation, blockchain integration, digital signing & stamping, and many other powerful features and experience a digitized arbitration process.        </p>
                                    <img src={Image3} alt="image1" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
