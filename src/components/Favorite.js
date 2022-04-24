import React from "react";
import "./Favorite.css";
// import Slide from "react-reveal/Reveal";
import Slide from "@stahl.luke/react-reveal";
import favorite from "../images/favorite.jpg";

const Favorite = ({ id }) => {
  return (
    <div className="favContainer" id={id}>
      <h2>Our favorite</h2>

      <div className="favContent">
        <Slide left>
          <img src={favorite} className="favImage" alt="cake" />
        </Slide>
        <Slide right>
          <div className="textContent">
            <p>
              An assortment for the special one or people in your lives. Let
              someone know that you appreciate them with a gift that keeps on
              giving.
            </p>
          </div>
        </Slide>
      </div>
      <button className="favBtn">Order Now</button>
    </div>
  );
};

export default Favorite;
