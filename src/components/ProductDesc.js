import React, {useState, useEffect} from "react";
import "../css/ProductDesc.css"
import { useLocation} from "react-router-dom";
import axios from "axios";

function ProductDesc(props) {

    const [products, setProducts] = useState([]);

    let location = useLocation();

    useEffect(() => {
        const url = `http://localhost:5000/products/${location.state.test}`
        axios.get(url)
        .then((response) => 
        {
          setProducts(response.data.body[0]);
        }, (error) => 
        {
          console.log(error);
        });
        
     }, []);


    
  const imgSource=`/products/${products.image}`;
    


  return (
      <div className="pd-main-div">
      <div className="setimg">
                 <img src={imgSource} alt="" />
                 </div>
        
        <div className="pd-content">
            <h4>{products.title}</h4><br/>
            <h6>Product Description:</h6>
            <ul>
              <li>{products.description}</li>
            </ul><br/>
                

            <span>Price: <b>CDN$ {products.price}</b></span><br/><br/>

            <span className="select-quantity"><h6>Quantity: </h6> 
            <select name="quantity" id="quantity">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            </span><br/>

            <span className="in-stock"><h5>In Stock.</h5></span>
            
            <button>Add to Cart</button>
            
        </div>
        
    </div>
   
  );
}

export default ProductDesc;
