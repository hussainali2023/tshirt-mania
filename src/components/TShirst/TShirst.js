import React from "react";
import "./TShirt.css";

const TShirst = ({ tshirt, handleAddToCart }) => {
  const { name, picture, price, gender } = tshirt;
  return (
    <div className="tshirt-container">
      <img src={picture} alt="" />
      <h1>{name}</h1>
      <h4>Price: ${price}</h4>
      <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
    </div>
  );
};

export default TShirst;
