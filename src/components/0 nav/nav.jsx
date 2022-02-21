import { React, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//
import Header from "../2 header/header";
import HowITWork from "../3 how it work/HowITWork";
import Page from "../4 page/page";
import Footer from "../5 footer/footer";
import Pg from "../6 PG/pg"


function Nav() {
    const NavRef = useRef();
    useEffect(() => {
        gsap.fromTo(NavRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 1 });
    });

    return (
        <Router basename="/">
            <div className="containerTop" >
            </div>
            <nav ref={NavRef}>
                <div className="logo">DYD PASSWORD</div>
                <ul className='navlinks'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Password-Generator">Password generator (soon)</Link></li>
                </ul>

                <div className='burger'>burger</div>   {/* For responsive*/}
            </nav>

            <Routes>
                <Route exact path="/" element={
                    <>
                        <Header />
                        <HowITWork />
                        <Page />
                        <Footer />
                    </>
                } />

                <Route path="/Password-Generator" element={<>
                    <Pg />
                    <Footer />
                </>} />

            </Routes>
        </Router>
    )
}

export default Nav
