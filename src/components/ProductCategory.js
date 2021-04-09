import React, { useState, useEffect } from "react";
import Product from "./Product";
import "../css/ProductCategory.css";
import { useLocation, Link} from "react-router-dom";

function ProductCategory() {

const [products, setProducts] = useState([]);
let location = useLocation();



  useEffect(() => {
        fetch('https://amazon-fakedb.herokuapp.com/products',{
        headers: {'Content-Type': 'application/json'}
        })
        .then(response =>  response.json())
        .then(data => setProducts(data))
        
    }, []);


  return (
    <div className="pc-row">
        <div className="container">
        {products.filter(item => item.category===location.state.test).map(item => (
                <div className="pc-row"> 
                <Link to={{pathname:'/productdesc', state:{test: item.id}}}>
                    <Product
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
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
