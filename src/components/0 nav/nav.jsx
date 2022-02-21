import { React } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "../2 header/header";
import HowITWork from "../3 how it work/HowITWork";
import Page from "../4 page/page";
import Footer from "../5 footer/footer";
import Pg from "../6 PG/pg"

function Nav() {
    return (
        <Router basename="/">
            <div className="containerTop" >
            </div>
            <nav >
                <div className="logo">DYD PASSWORD</div>
                <ul className='navlinks'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Password-Generator">Password generator (soon)</Link></li>
                </ul>

                <div className='burger'>burger</div>   {/* For Responsive*/}
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
