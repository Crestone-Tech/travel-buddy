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
          Travel Buddy has set out to create an application to help put you're
          mind at ease when setting up that dream vacation that you and your
          party are dying to go on. Envision your trip with our easy to use
          whiteboard that you and your tribe will have access to simultaneously
          to help put everyones vision together. Manage your tribes with a
          simple click of the buton and even view your tribes planned trips.
          Plan reservations with our Buddy board to help you keep track of
          whatever you'll need to help make this vacation a success.
        </p>
      </div>
      <div className="image-container">
        <img src={sky} alt="Travel" className="sky" />
      </div>
    </div>
  );
}
