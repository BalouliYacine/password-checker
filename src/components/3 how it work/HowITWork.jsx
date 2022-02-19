import { React, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import A from './hwImg/A.svg';
import B from './hwImg/B.svg';
import C from './hwImg/C.svg';


function HowITWork() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(".howLi", { opacity: 0 }, {
            opacity: 1,
            stagger: 5,
            scrollTrigger: {
                trigger: ".HowITWork",
                pin: true,
                scrub: true,
            }
        })
    }, []);

    return (
        <>
            <div className='HowITWork' id='HowITWork' >
                <h2>HowITWork</h2>
                <div className='condivforimg'>

                    <ul>
                        <li className='howLi'><p>○ Put Your <span>Password</span>.</p>
                            <div className='HowITWorkImg howLi2'>
                                <img src={A} alt="" />
                            </div>
                        </li>

                        <li className='howLi'><p>○ We Run Your Password In <span>SHA-1 Function</span> To Get <span>The Hash</span>.</p>
                            <div className='HowITWorkImg howLi2'>
                                <img src={C} alt="" />
                            </div></li>

                        <li className='howLi'><p>○ We Send A Get Requast To <span>The Pwned Api V3</span> To Quickly Searched Via A RESTful Service And <span>Check It</span>.</p>
                            <div className='HowITWorkImg howLi2'>
                                <img src={B} alt="" />
                            </div></li>
                        <li className='howLi'></li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default HowITWork
