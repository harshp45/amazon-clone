import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "../css/AllProducts.css";
import axios from "axios";

function AllProducts() {

const [products, setProducts] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:5000/products')
    .then((response) => 
    {
      setProducts(response.data.body);
    }, (error) => 
    {
      console.log(error);
    });
}, []);


  return (
    <div className="pro-row">
        <div className="container">
        {products.map(item => (
                <div className="pro-row"> 
                <Link to={{pathname:'/productdesc', state:{test: item.id}}}>
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        popularity={item.popularity}
                        rating={item.rating}
                        image={item.image}
                    />
                  </Link> 
                </div>  
        ))}
         </div>
    </div>   
  )
}

export default AllProducts;
