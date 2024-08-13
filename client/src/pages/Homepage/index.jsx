import React from "react";
import sky from "../../assets/images/sky.jpg";
import "./style.css";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h1 className="title">
          <strong>Travel Buddy&#8482;</strong><br></br> The fun and low-stress path to a perfect group vacation.
        </h1>
        <p className="description">
          Travel Buddy helps you organize the dream vacation you've always wanted. 
          Envision a trip with an easy to use and collaborative
          whiteboard and plan together in real-time. Manage tribes of traveling companions
          and view the trips you've planned.
          You can even track reservations with our Buddy board to help you manage all your trip 
          logistics. Travel Buddy has everything you need to make your vacation a success!
        </p>
      </div>
      <div className="image-container">
        <img src={sky} alt="Travel" className="sky" />
      </div>
    </div>
  );
}
