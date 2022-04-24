import React from "react";
import "./Flowers.css";
import "./Staff.css";
import { staff } from "../data/staff";
// import Slide from "react-reveal/Reveal";
import Slide from "@stahl.luke/react-reveal";

const Staff = ({ id }) => {
  return (
    <div className="staffContainer" id={id}>
      <h1 className="flowerHeading">Meet Our Staff</h1>
      <div className="flowerWrapper">
        {staff.map((staff, index) => (
          <Slide
            key={(staff, index)}
            right={index % 2 === 1 ? true : false}
            left={index % 2 === 0 ? true : false}
          >
            <div className="flowerCard">
              <img src={staff.img} className="staffImg" alt={staff.alt} />
              <div className="flowerInfo">
                <div className="protTitle">{staff.name}</div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Staff;
