import React, { useState, useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import "../css/Main.css";
import Product from "./Product";
import Category from "./Category";
import "../css/Product.css";
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

    fetch('http://localhost:3000/products',{
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
                <div className="carousel-item active" data-bs-interval="15000">
                  <img src={image1} className="m-image" alt="" />
                </div>
                <div className="carousel-item" data-bs-interval="7000">
                  <img src={image2} class="m-image" alt="" />
                </div>
                <div className="carousel-item">
                  <img src={image3} class="m-image" alt="" />
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
      {/* <img className="m-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> */}
        {/* <Carousel>
              <div>
                <img className="m-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
              </div>
              <div>
                <img className="m-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
              </div>
              <div>
                <img className="m-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
              </div>
              <div>
                <img className="m-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
              </div>
        </Carousel> */}
        <div className="m-row">
              <Link >
              <Category
                title="Bookshelf and Readings"
                image="https://images-na.ssl-images-amazon.com/images/I/81W1swVa19L.jpg"/>
              </Link>
              <Link>
              <Category
                title="Camera and Lens"
                image="https://images-na.ssl-images-amazon.com/images/I/81kzldM7%2BJL._AC_SL1500_.jpg"/>
              </Link>

              <Link>
              <Category
                title="Medicine and Drugs"
                image="https://images-na.ssl-images-amazon.com/images/I/613Myh8hxaL._AC_SY450_.jpg"/>
              </Link>
              <Link>
              <Category
                title="Electronics"
                image="https://images-na.ssl-images-amazon.com/images/I/81xurOYks0L._AC_SX425_.jpg"/>
              </Link>
        </div>
        {/* <div className="m-row">
          <Product
            id="1"
            title="Unfinished: A Memoir by Priyanka Chopra"
            price={16.80}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81W1swVa19L.jpg"
          />
          <Product
            id="2"
            title="Philips S9041/12 9000 Series Wet and Dry Shaver with SmartClick Precision Trimmer"
            price={250.19}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81xurOYks0L._AC_SX425_.jpg"
          />
        </div>

        <div className="m-row">
          <Product
            id="3"
            title="PURA D'OR Hair Thinning Therapy Shampoo & Conditioner 2-Piece System for Prevention, Men & Women (Packaging may vary)"
            price={96.02}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91JsdNThJ2L._AC_SX466_.jpg"
          />
          <Product
            id="4"
            title="PlayStation 5 Console - PlayStation 5 Edition"
            price={629.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg"
          />
          <Product
            id="5"
            title="New Apple AirPods Max - Space Grey"
            price={779.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81jqUPkIVRL._AC_SL1500_.jpg"
          />
        </div>

        <div className="m-row">
          <Product
            id="6"
            title="Multivitamin Gummies For Adults - Orange Flavour, Non-GMO, Gluten-Free"
            price={14.39}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/613Myh8hxaL._AC_SY450_.jpg"
          />
          <Product
            id="7"
            title="Celestron 21061 AstroMaster 70AZ Refractor Telescope"
            price={243.14}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51A2C8kPkPL._AC_SY355_.jpg"
          />
          <Product
            id="8"
            title="Nikon D7500 20.9MP DSLR Camera with AF-S DX NIKKOR 16-80mm f/2.8-4E ED VR Lens, Black (US VERSION)"
            price={2054.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81kzldM7%2BJL._AC_SL1500_.jpg"
          />
        </div>  */}

      {/* {products.map(item => (
        <div className="m-row">
        <Product 
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}/>
        </div>
              ))} */}
      </div>
    </div>
  );
}

export default Main;
