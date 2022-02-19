import React from "react";
import Nav from "./components/0 nav/nav";
import Header from "./components/2 header/header";
import HowITWork from "./components/3 how it work/HowITWork";
import Page from "./components/4 page/page";
import Footer from "./components/5 footer/footer";
import Pg from "./components/6 PG/pg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//CSS
import './master.css'

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={
            <>
              <div className="containerTop" >
              </div>
              <Nav />
              <Header />
              <HowITWork />
              <Page />
              {/* <Footer /> */}
            </>
          } />

          <Route exact path="/pg" element={<div>
            <div className="containerTop" >
            </div>
            <Nav />
            <Pg />
          </div>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
