import React from "react";
import "./middle.css";
import Egg from "../../images/desktop/image-transform.jpg";

export default function middle() {
  return (
    <div className="middle-div">
      <div className="tetri">
        <div className="middle-div_1">
          <h1 className="middle-div_h1">Transform your brand</h1>
          <p className="middle-div_p1">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="middle-div_p2">LEARN MORE</p>
        </div>
        <div className="middle-div_2">
          <img className="egg" src={Egg} />
        </div>
      </div>

      <div></div>
    </div>
  );
}
