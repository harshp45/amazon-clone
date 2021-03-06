import React from "react";
import RoomIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom";
import "../css/Navigation.css";

function Navigation() {
    return (
      <div className="u-main-div">
           <div className="nav-icon"><RoomIcon/></div>

            <div className="u-nav-content">
                <span className="u-span-top">Hello</span>
                <span className="u-span-bottom">Select Your Address</span>
            </div>
            
            <div className="u-navbar-div">
            <Link to="/products">
                <div className="u-nav-content">
                    <span>Products</span>
                </div>
            </Link>
            <Link to="/bestsellers">
                <div className="u-nav-content">
                    <span>Best Sellers</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>Deal Store</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>New Releases</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>Gift Ideas</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>Electronics</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>Customer Service</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>Home</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>Computers</span>
                </div>
            </Link>
            <Link>
                <div className="u-nav-content">
                    <span>Gift Cards</span>
                </div>
            </Link>
            <div className="u-newdeals">
                <span className="new-deals">New deals everyday</span>
            </div>
        </div>
      </div>
    );
  }
  
  export default Navigation;