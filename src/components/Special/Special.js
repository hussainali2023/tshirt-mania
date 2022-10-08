import React from "react";

const Special = ({ house, dimondRing }) => {
  return (
    <div>
      <h1>Special Person</h1>
      <p>
        <small>House: {house}</small>
      </p>
      <p>
        <small>
          {" "}
          <small>Dimond Ring: {dimondRing}</small>
        </small>
      </p>
    </div>
  );
};

export default Special;
