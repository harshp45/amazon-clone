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
