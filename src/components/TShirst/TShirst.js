import React from "react";
import "./TShirt.css";

const TShirst = ({ tshirt }) => {
  console.log(tshirt);
  const { name, picture, price, gender } = tshirt;
  console.log(name);
  return (
    <div className="tshirt-container">
      <img src={picture} alt="" />
      <h1>{name}</h1>
      <h4>Price: ${price}</h4>
      <button>Buy This</button>
    </div>
  );
};

export default TShirst;
