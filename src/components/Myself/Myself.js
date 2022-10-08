import React from "react";
import Special from "../Special/Special";

const Myself = ({ house, dimondRing }) => {
  return (
    <div>
      <h1>Myself components</h1>
      <p>
        <small>House: {house}</small>
      </p>
      <Special house={house} dimondRing={dimondRing}></Special>
    </div>
  );
};

export default Myself;
