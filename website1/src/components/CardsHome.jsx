import React from "react";
import CardItem from "./CardItem";
import "./CardsHome.css";

function CardsHome() {
  return (
    <div className="cards">
      <h1>Check this amazing club</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/horse-1.png"
              text="Enjoy the best moments riding a horse"
              label="Subscribe"
              path="/products"
            />
            <CardItem
              src="images/horse-1.png"
              text="Enjoy the best moments riding a horse"
              label="Subscribe"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/horse-1.png"
              text="Enjoy the best moments riding a horse"
              label="Subscribe"
              path="/products"
            />
            <CardItem
              src="images/horse-1.png"
              text="Enjoy the best moments riding a horse"
              label="Subscribe"
              path="/products"
            />
            <CardItem
              src="images/horse-1.png"
              text="Enjoy the best moments riding a horse"
              label="Subscribe"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsHome;
