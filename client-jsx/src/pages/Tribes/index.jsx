import React from "react";

export default function Tribes() {
  return (
    <div>
      Tribes Page!
      <br></br>
      <button
        id="tribeInit"
        onClick={() => console.log("Will later create a tribe")}
      >
        Start My Tribe
      </button>
      <br></br>
      <button
        id="tribeDelete"
        onClick={() => console.log("Will later delete your tribe")}
      >
        Disband My Tribe
      </button>
    </div>
  );
}
