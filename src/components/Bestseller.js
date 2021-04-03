import React, { useState, useEffect } from "react";
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Product from "./Product";
import "../css/Bestseller.css";

function Bestseller() {

const [products, setProducts] = useState([]);



  useEffect(() => {
        fetch('http://localhost:3000/products',{
        headers: {'Content-Type': 'application/json'}
        })
        .then(response =>  response.json())
        .then(data => setProducts(data))
        
    }, []);


  return (
    <div className="b-row">
        <div className="container">
        {products.filter(item => item.popularity==='BestSeller').map(item => (
                <div className="b-row"> 
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    /> 
                </div>  
        ))}
         </div>
    </div>   
  )
}

export default Bestseller;
