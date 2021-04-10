import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "../css/AllProducts.css";

function AllProducts() {

const [products, setProducts] = useState([]);



  useEffect(() => {
        fetch('https://amazon-fakedb.herokuapp.com/products',{
        headers: {'Content-Type': 'application/json'}
        })
        .then(response =>  response.json())
        .then(data => setProducts(data))
        
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