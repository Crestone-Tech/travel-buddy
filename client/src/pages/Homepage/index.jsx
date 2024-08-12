import React from "react";
import sky from "../../assets/images/sky.jpg";
import "./style.css";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h1 className="title">
          Travel Buddy, The stress-free way to set up that perfect group
          vacation.
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, magna in vehicula egestas, ex velit luctus elit, non aliquam
          metus velit eget lorem.
        </p>
      </div>
      <div className="image-container">
        <img src={sky} alt="Travel" className="sky" />
      </div>
    </div>
  );
}
