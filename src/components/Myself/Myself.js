import React from "react";
import Special from "../Special/Special";

const Myself = ({ house }) => {
  return (
    <div>
      <h1>Myself components</h1>
      <p>
        <small>House: {house}</small>
      </p>
      <Special house={house}></Special>
    </div>
  );
};

export default Myself;
