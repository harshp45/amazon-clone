import React from "react";
import "../css/Category.css";

function Category({ title, image }) {

  return (
    <div className="category-div">

      <div className="category-details">
          <p>{title}</p>
      </div>

      <img src={image} alt="" />

    </div>
  );
}

export default Category;
