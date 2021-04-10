import React from "react";
import "../css/Product.css";

function Product({ id, title, image, price, popularity, rating }) {

  return (
    <div className="p-main-div">

      <div className="p-details">
          <p>{title}</p>

          <p className="p-price">
            <b>${price}</b>
            
          </p>
          <p>
            <b>{popularity}</b>
          </p>
          <div className="p-rating-stars">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
      </div>

      <img src={image} alt="" />
    </div>
  );
}

export default Product;
