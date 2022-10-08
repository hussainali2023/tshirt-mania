import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Sister components</h1>
      <p>
        <small>House: {house}</small>
      </p>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000</button>
    </div>
  );
};

export default Sister;
