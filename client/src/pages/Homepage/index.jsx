import React from "react";
import sky from "../../assets/images/sky.jpg";
import "./style.css";

export default function Homepage() {
  return (
    <div className="homepage-container flex flex-col lg:flex-row items-center">
      <div className="text-container flex-1 py-6 px-12">
        <h1 className="title text-2xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left pb-8">
          Travel Buddy, The stress-free way to set up that perfect group
          vacation.
        </h1>
        <p className="description text-base md:text-lg lg:text-xl text-center lg:text-left">
          Travel Buddy has set out to create an application to help put your
          mind at ease when setting up that dream vacation that you and your
          party are dying to go on. Envision your trip with our easy-to-use
          whiteboard that you and your tribe will have access to simultaneously
          to help put everyone's vision together. Manage your tribes with a
          simple click of the button and even view your tribes planned trips.
          Plan reservations with our Buddy board to help you keep track of
          whatever you'll need to help make this vacation a success.
        </p>
      </div>
      <div className="image-container flex-1 w-full mt-6 lg:mt-0 lg:w-auto py-6 px-12">
        <img
          src={sky}
          alt="Travel"
          className="sky w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
