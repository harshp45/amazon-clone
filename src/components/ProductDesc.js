import React, {useState, useEffect} from "react";
import "../css/ProductDesc.css"
import { useLocation} from "react-router-dom";

function ProductDesc(props) {

    const [products, setProducts] = useState([]);
    let location = useLocation();

    useEffect(() => {
        const url = `https://amazon-fakedb.herokuapp.com/products/${location.state.test}`
        // console.log(location.state.test);
        fetch(url,{
        headers: {'Content-Type': 'application/json'}
        })
        .then(response =>  response.json())
        .then(data => setProducts(data))
        
    }, []);


  return (
    <div className="pd-main-div">
      <div className="setimg">
                 <img src={products.image} alt="" />
                 </div>
        
        <div className="pd-content">
            <h4>{products.title}</h4>
            <span>{products.description}</span><br/>
            <span>Price: <b>CDN$ {products.price}</b></span>
            
            <button>Add to Cart</button>
            
        </div>
        
    </div>
  );
}

export default ProductDesc;
