import React from "react";

const FoodItems = ({ Ingredient, Introduction, imageUrl }) => {
  return (
    <div className="food-items">
      <img src={imageUrl} alt="" />
      <div>
        <h2 className="item-name">{Ingredient}</h2>
        <p className="item-desc">{Introduction}</p>
      </div>
    </div>
  );
};

export default FoodItems;
