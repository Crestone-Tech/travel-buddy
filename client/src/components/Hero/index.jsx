import React from "react";
import travelDreams from "../../assets/images/traveldreams.png";
import cenote from "../../assets/images/cenote.png";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={travelDreams} alt="Travel Dreams" className="hero-image" />
        <img src={cenote} alt="Cenote" className="hero-image" />
      </div>
    </section>
  );
}
