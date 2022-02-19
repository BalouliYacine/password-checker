import { React, useRef, useEffect } from 'react'
import { gsap } from "gsap";

function Nav() {
    const NavRef = useRef();
    useEffect(() => {
        gsap.fromTo(NavRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });
    });
    return (
        <nav ref={NavRef}>
            <div className="logo">DYD PASSWORD</div>
            <ul className='navlinks'>
                <li><a href="">Home</a></li>
                <li><a href="">How it work</a></li>
                <li><a href="">Saftey</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className='burger'>burger</div>
        </nav>
    )
}

export default Nav
