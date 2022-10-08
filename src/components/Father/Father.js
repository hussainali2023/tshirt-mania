import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ house, dimondRing }) => {
  return (
    <div>
      <h1>This is from Father components</h1>
      <p>
        <small>House: {house}</small>
      </p>
      <section className="flex">
        <Myself house={house} dimondRing={dimondRing}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
