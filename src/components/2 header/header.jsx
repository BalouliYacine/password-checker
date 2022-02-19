import { React, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import PaswordH from '../1 pasword check/password'

function Header() {
    const HRef = useRef();
    const PRef = useRef();
    //
    useEffect(() => {
        gsap.fromTo(HRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: .5 });
        gsap.fromTo(PRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1 });
    });
    return (
        <header>
            <h1 ref={HRef}>check your <span>password</span></h1>
            <p ref={PRef} className='HP'>if you want to test your password,<br />
                or test a new one we get your back.</p>
            <br />
            <PaswordH />

        </header>
    )
}

export default Header
