import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "../css/Bestseller.css";
import axios from "axios";

function Bestseller() {

const [products, setProducts] = useState([]);



  useEffect(() => {
        axios.get('http://localhost:5000/bestseller')
        .then((response) => 
        {
          console.log(response.data.body);
          setProducts(response.data.body);
        }, (error) => 
        {
          console.log(error);
        });
    }, []);


  return (
    <div className="b-row">
        <div className="container">
        {products.map(item => (
                <div className="b-row"> 
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

export default Bestseller;
