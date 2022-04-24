import React from "react";
import "./Footer.css";

const Footer = ({ id }) => {
  return (
    <div className="footerContainer" id={id}>
      <div className="footerColumn">
        <h4>Social Media</h4>
        <div>Facebook</div>
        <div>Instagram</div>
      </div>
      <div className="footerColumn">
        <h4>About</h4>
        <div>Contact us</div>
        <div>Careers</div>
      </div>
      <div className="footerColumn">
        <h4>Locations</h4>
        <div>Seattle</div>
        <div>Port Orchard</div>
      </div>
    </div>
  );
};

export default Footer;
