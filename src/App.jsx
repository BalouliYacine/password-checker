import React from "react";
import Nav from "./components/0 nav/nav";
import Header from "./components/2 header/header";
import HowITWork from "./components/3 how it work/HowITWork";
import Page from "./components/4 page/page";
import Footer from "./components/5 footer/footer";
//CSS
import './master.css'

function App() {
  return (
    <>
      <div className="containerTop" >
      </div>
      <Nav />
      <Header />
      <HowITWork />
      <Page />
      {/* <Footer /> */}
    </>
  );
}

export default App;
