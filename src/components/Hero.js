import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import Sidebar from "./Sidebar";

const Hero = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <Navbar toggle={toggle}></Navbar>
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className="navHead">
            Gorgeous flowers from our garden to yours truly
          </h1>
          <p>
            Beautiful bouquet's and blossoms for loved ones and associates.
            Serving the local community for 45 years.
          </p>
          <div className="btn">Order now</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
