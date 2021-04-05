import React, { useState, useEffect } from "react";
import Product from "../Product";
import "./css/Books.css";

function Books() {

const [products, setProducts] = useState([]);



  useEffect(() => {
        fetch('http://localhost:3000/products',{
        headers: {'Content-Type': 'application/json'}
        })
        .then(response =>  response.json())
        .then(data => setProducts(data))
        
    }, []);


  return (
    <div className="book-row">
        <div className="container">
        {products.filter(item => item.category==='Bookshelf and Readings').map(item => (
                <div className="book-row"> 
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

export default Books;
