import React, { useEffect } from 'react'
import { inView } from 'framer-motion'
import Image1 from '../assets/Images/Approach1.png'
import Image2 from '../assets/Images/Approach1.png'
import Image3 from '../assets/Images/Approach1.png'
import Image4 from '../assets/Images/Approach1.png'
import { useState } from 'react'
export default function Mobile_impression({data}) {
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
        inView(document.getElementById('impression_mobile_child_4'), () => {
            showDataAccordian('impression_mobile_child_1')
        })

    }, [])
    return (
        <div className='accordian_section section'>
            <div className='accordian_section_body' >
                <div className='accordian_section_wrap' style={{ gridTemplateColumns: "45% 45%" }}>
                    <div className="faq_main_container">
                          {
                            data.map((elemnt,index)=>{
                                return(
                                    <div className="faq_container">
                                    <div className="faq_question" id={`impression_mobile_child_${index+1}`} data={index} onClick={() => { showDataAccordian(`impression_mobile_child_${index+1}`) }}>
                                        <div className="faq_question-text">
                                            <h3>{elemnt.tittle}</h3>
                                        </div>
                                        <div className="icon">
                                            <div className="icon-shape"></div>
                                        </div>
                                    </div>
                                    <div className="answercont">
                                        <div className="answer">
                                            {
                                                elemnt.description.map((content)=>{
                                                 return (
                                                    <p>{content}</p>
                                                 )
                                                })
                                            }
      
                                            <img src={elemnt.image} alt="image1" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                          }
                       
            
                    </div>
                </div>

            </div>

        </div>
    )
}
