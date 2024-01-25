import React, { useEffect } from 'react'
import '../Section/section.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function About() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

            var images = gsap.utils.toArray('.panel:not(.purple)');

            images.forEach((image, i) => {

                var tl = gsap.timeline({

                    scrollTrigger: {
                        trigger: "section.black",
                        start: () => "top -" + (window.innerHeight * (i + 0.5)),
                        end: () => "+=" + window.innerHeight,
                        scrub: true,
                        toggleActions: "play none reverse none",
                        invalidateOnRefresh: true,
                    }

                })

                tl
                    .to(image, { height: 0 })
                    ;

            });



            gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

            var texts = gsap.utils.toArray('.panel-text');

            texts.forEach((text, i) => {

                var tl = gsap.timeline({

                    scrollTrigger: {
                        trigger: "section.black",
                        start: () => "top -" + (window.innerHeight * i),
                        end: () => "+=" + window.innerHeight,
                        scrub: true,
                        toggleActions: "play none reverse none",
                        invalidateOnRefresh: true,
                    }

                })

                tl
                    .to(text, { duration: 0.33, opacity: 1, y: "50%" })
                    .to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66)
                    ;

            });





            ScrollTrigger.create({

                trigger: "section.black",
                scrub: true,
                // markers: true,
                pin: true,
                start: () => "top top",
                end: () => "+=" + ((images.length + 1) * window.innerHeight),
                invalidateOnRefresh: true,

            });

        });
        return () => ctx.revert();
    })

    return (


        <section className="black">
            <div className='about_heading'>
                <h2 className='orng_heading'>About</h2>
                <h2 className='blue_heading'>Presolv<span className='orng_heading'>360</span></h2>
            </div>
            <div className="text-wrap">
                <div className="panel-text">
                    <h5>We are an automation and AI-driven ODR platform that is taking dispute resolution to the fingertips of businesses and individuals alike.</h5>
                    <button className='orange_btn'>Learn More</button>
                </div>
                <div className="panel-text">
                    <h5>We have facilitated resolutions in financial, consumer, family, insurance, real estate and MSME disputes since inception.</h5>
                    <button className='orange_btn'>Learn More</button>
                </div>
                <div className="panel-text">
                    <h5>Our platform creates a level-playing field by promoting participation from remote locations and diverse socio-economic backgrounds.</h5>
                    <button className='orange_btn'>Learn More</button>
                </div>
                <div className="panel-text">
                    <h5>Resultantly, parties are able to achieve timely resolution of their dispute, while drastically reducing the cost involved in resolving them.</h5>
                    <button className='orange_btn'>Learn More</button>
                </div>
            </div>

            <div className="p-wrap">
                <div className="panel blue"></div>
                <div className="panel red"></div>
                <div className="panel orange"></div>
                <div className="panel purple"></div>
            </div>

        </section>


    )
}
