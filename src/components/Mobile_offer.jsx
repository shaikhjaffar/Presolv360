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
                                    <h3>Negotiate seamlessly and settle disputes digitally</h3>
                                    <p>
                                    Negotiate with counter-parties using our intuitive negotiation tools, multilingual chatbots, dynamic payment links, populate and exchange offers, and record terms in digital agreements                                    </p>
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
                                    <h3>Mutually-beneficial resolutions in a few clicks</h3>
                                    <p>
                                    Leverage the power of mediation to amicably resolve your dispute and record terms in a binding settlement agreement / conciliation award facilitated by certified mediators and our powerful mediation platform                                                </p>     <img src={Image2} alt="image1" style={{ width: "100%" }} />   </div>
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
                                    Institutional e-arbitration for enforceable outcomes                                    </h3>
                                    <p>
                                    While the institutional structure addresses all legal aspects, the platform ensures effective administration through AI-driven research, algorithmic case allocation, smart case management, task automation, digital awards, etc.        </p>
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
