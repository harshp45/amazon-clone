import React, { useState, useEffect } from "react";
import Product from "./Product";
import "../css/ProductCategory.css";
import { useLocation, Link} from "react-router-dom";
import axios from "axios";

function ProductCategory() {

const [products, setProducts] = useState([]);
let location = useLocation();



  useEffect(() => {
    axios.post('http://localhost:5000/category',{
      "category":location.state.test
    })
    .then((response) => 
    {
      setProducts(response.data.body);
    }, (error) => 
    {
      console.log(error);
    });
}, []);


  return (
    <div className="pc-row">
        <div className="container">
        {products.map(item => (
                <div className="pc-row"> 
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

export default ProductCategory;
