import React, { useState, useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "../css/Main.css";
import Category from "./Category";
import { Link } from "react-router-dom";

//Images
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

function Main() 
{

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch('https://amazon-fakedb.herokuapp.com/products',{
      headers: {'Content-Type': 'application/json'}
    })
    .then(response =>  response.json())
    .then(data => setProducts(data))
    }, []);

  return (
    <div className="main-div">
      <div className="container-app">
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                  <img src={image1} className="m-image" alt="" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img src={image2} class="m-image" alt="" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img src={image3} class="m-image" alt="" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img src={image4} class="m-image" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel"  data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="m-row">
              <Link to={{pathname:"productCategory", state:{test: 'Bookshelf and Readings'}}}>
              <Category
                title="Bookshelf and Readings"
                image="https://images-na.ssl-images-amazon.com/images/I/81W1swVa19L.jpg"/>
              </Link>
              <Link to={{pathname:"productCategory", state:{test: 'Camera and Lens'}}}>
              <Category
                title="Camera and Lens"
                image="https://images-na.ssl-images-amazon.com/images/I/81kzldM7%2BJL._AC_SL1500_.jpg"/>
              </Link>

              <Link to={{pathname:"productCategory", state:{test: 'Medicine and Drugs'}}}>
              <Category
                title="Medicine and Drugs"
                image="https://images-na.ssl-images-amazon.com/images/I/613Myh8hxaL._AC_SY450_.jpg"/>
              </Link>
              <Link to={{pathname:"productCategory", state:{test: 'Electronics'}}}>
              <Category
                title="Electronics"
                image="https://images-na.ssl-images-amazon.com/images/I/81xurOYks0L._AC_SX425_.jpg"/>
              </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
