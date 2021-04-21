import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from '@material-ui/core/IconButton';
import {
  IconFlagCA,
  IconFlagUS
} from "material-ui-flags";
import CartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="h-main-div">
        <Link to="/">
          <img className="amazon-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
  
        <div className="h-search-div">
          <input className="h-search-bar" type="text" id="search-products"/>
          <button><SearchIcon className="h-search-icon"  /></button>
        </div>

        <div>
          <IconButton><IconFlagCA/></IconButton>
        </div>
  
        <div className="h-navbar-div">
          <Link to="/login">
            <div className="h-nav-content">
              <span className="h-span-top">Hello, Sign In</span>
              <span className="h-span-bottom">Account & Lists</span>
            </div>
          </Link>
  
          <Link to='/orders'>
            <div className="h-nav-content">
              <span className="h-span-top">Returns</span>
              <span className="h-span-bottom">& Orders</span>
            </div>
          </Link>
          
  
          <div className="h-nav-content">
            <span className="h-span-top">Try</span>
            <span className="h-span-bottom">Prime</span>
          </div>
  
          <Link to="/checkout">
            <div className="h-cart-div">
              <CartIcon />
              <span>Cart</span>
              <span className="h-span-bottom h-cart-count">
                0
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Header;