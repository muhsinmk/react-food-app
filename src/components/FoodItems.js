import React from "react";

const FoodItems = ({ Ingredient, "Short text": Shorttext, imageUrl }) => {
  return (
    <div className="food-items">
      <img src={imageUrl} alt="" />
      <div>
        <h2 className="item-name">{Ingredient}</h2>
        <p className="item-desc">{Shorttext}</p>
      </div>
    </div>
  );
};

export default FoodItems;
