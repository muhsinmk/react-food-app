import React from "react";
import FoodItems from "./FoodItems";
const FoodGallery = ({ data }) => {
  return (
    <div className="product-container">
      <h2 className="section-head">Foods</h2>
      <div className="food-gallery">
        {data.map((item) => (
          <FoodItems key={item.Recipe} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
