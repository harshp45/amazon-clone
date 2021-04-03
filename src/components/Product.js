import React from "react";
import "../css/Product.css";

function Product({ id, title, image, price, rating }) {

  return (
    <div className="p-main-div">

      <div className="p-details">
          <p>{title}</p>

          <p className="p-price">
            <b>${price}</b>
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

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
