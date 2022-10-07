import React from "react";
import { useLoaderData } from "react-router-dom";
import TShirst from "../TShirst/TShirst";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <TShirst key={tshirt.id} tshirt={tshirt}></TShirst>
        ))}
      </div>
      <div className="cart-container">
        <h1>this is cart container</h1>
      </div>
    </div>
  );
};

export default Home;
