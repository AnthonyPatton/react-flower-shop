import React from "react";
import "./Flowers.css";
import { flowers } from "../data/menu";
// import Slide from "react-reveal/Reveal";
import Slide from "@stahl.luke/react-reveal";

const Flowers = ({ id }) => {
  return (
    <div className="flowerContainer" id={id}>
      <h1 className="flowerHeading">Most popular</h1>
      <div className="flowerWrapper">
        {flowers.map((flower, index) => (
          <Slide
            key={index}
            right={index >= 3 ? true : false}
            left={index < 3 ? true : false}
          >
            <div className="flowerCard">
              <img src={flower.img} className="flowerImg" alt={flower.alt} />
              <div className="flowerInfo">
                <div className="protTitle">{flower.title}</div>
                <div className="protDesc">{flower.desc}</div>
                <div className="flowerPrice">{flower.price}</div>
                <button className="flowerBtn">Select</button>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Flowers;
