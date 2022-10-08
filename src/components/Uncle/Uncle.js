import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const money = useContext(MoneyContext);
  return (
    <div>
      <h1>This is from Uncle components</h1>
      <p>Money: {money}</p>
    </div>
  );
};

export default Uncle;
