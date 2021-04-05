import React from "react";
import "../css/Footer.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from '@material-ui/core/IconButton';
import {
  IconFlagCA,
  IconFlagUS
} from "material-ui-flags";
import { Link } from "react-router-dom";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
      <div className="f-main-div">
          <div className="back-top" onClick={scrollToTop}>
              <Link><h6>Back to top</h6></Link>
          </div>

          <div className="nav-line">&nbsp;</div>

          <div className="f-center-bar">
            <div className="f-navbar-div">
                <div className="f-nav-content">
                    <h5>Get Know Us</h5>
                    <a href="https://www.amazon.jobs/en-gb/"><span className="f-span-top">Careers</span></a>
                    <a href="https://www.amazon.ca/gp/help/customer/display.html?nodeId=200700220&ref_=footer_corpres"><span className="f-span-bottom">Amazon and Our Planet</span></a>
                    <a href="https://ir.aboutamazon.com/overview/default.aspx"><span className="f-span-bottom">Investors Relations</span></a>
                    <a href="https://press.aboutamazon.com/press-releases/news_canadian"><span className="f-span-bottom">Press Releases</span></a>
                </div>
            </div>
            <div className="f-navbar-div">
                <div className="f-nav-content">
                <h5>Make Money with Us</h5>
                <a href="https://sell.amazon.ca/?ld=AZFSSOA-CA-footer&ref_=footer_soa"><span className="f-span-top">Sell on Amazon</span></a>
                <a href="https://www.amazon.ca/b/?node=18602888011&ref_=map_1_b2b_GW_FT"><span className="f-span-bottom">Sell Under Amazon Accelerator</span></a>
                <a href="https://associates.amazon.ca/"><span className="f-span-bottom">Amazon Associates</span></a>
                <a href="https://www.amazon.ca/b/?node=16927192011&ld=AZCAHND-footer&ref_=footer_sell"><span className="f-span-bottom">Sell on Amazon Handmade</span></a>
                <a href="https://advertising.amazon.ca/?ref=footer_advtsing_amzn_ca"><span className="f-span-bottom">Advertise Your Products</span></a>
                <a href="https://kdp.amazon.com/en_US/?language=en_US"><span className="f-span-bottom">Independently Publish with Us</span></a>
                <a href="https://www.amazon.ca/b?ie=UTF8&node=15576834011"><span className="f-span-bottom">Host an Amazon Hub</span></a>
                </div>
            </div>
            <div className="f-navbar-div">
                <div className="f-nav-content">
                <h5>Amazon Payment Products</h5>
                <a href="https://www.amazon.ca/dp/B07MJM4F44?plattr=CACBCCFOOT&ref_=nav_cbcc_ca_footer"><span className="f-span-top">Amazon.ca Rewards Mastercard</span></a>
                <a href="https://www.amazon.ca/gp/browse.html?node=21371066011&ref_=footer_swp"><span className="f-span-bottom">Shop with Points</span></a>
                <a href="https://www.amazon.ca/gp/product/B08F4ZZ8NV?"><span className="f-span-bottom">Reload Your Balance</span></a>
                <a href="https://www.amazon.ca/gp/product/B08F4ZZ8NV?"><span className="f-span-bottom">Amazon Currency Converter</span></a>
                <a href="https://www.amazon.ca/gp/browse.html?node=8438004011&ref_=footer_tfx_ca_en"><span className="f-span-bottom">Gift Cards</span></a>
                <a href="https://www.amazon.ca/gp/browse.html?node=17321486011&ref_=footer_cash_ca_en"><span className="f-span-bottom">Amazon Cash</span></a>
                </div>
            </div>
            <div className="f-navbar-div">
                <div className="f-nav-content">
                <h5>Let Us Help You</h5>
                <a href="https://www.amazon.ca/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid"><span className="f-span-top">COVID-19 and Amazon</span></a>
                <a href="https://www.amazon.ca/gp/help/customer/display.html?nodeId=915470&ref_=footer_shiprates"><span className="f-span-bottom">Shipping Rates & Policies</span></a>
                <a href="https://www.amazon.ca/amazonprime?_encoding=UTF8&ref_=footer_prime"><span className="f-span-bottom">Amazon Prime</span></a>
                <a href="/login"><span className="f-span-bottom">Returns Are Easy</span></a>
                <a href="/login"><span className="f-span-bottom">Manage your Content and Devices</span></a>
                <a href="https://www.amazon.ca/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he"><span className="f-span-bottom">Customer Service</span></a>
                </div>
            </div>
          </div>

        <div className="nav-line"></div>

        <div className="f-navbar-div">
            <Link to="/">
                <img className="a-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div><IconButton><IconFlagCA/></IconButton></div>
        </div>

        <div className="nav-line"></div>

        <div className="f-center-bar">
            <div className="f-navbar-div">
                <div className="f-nav-content">
                    <span className="spanTop">Amazon Music</span>
                    <span className="spanBottom">Stream Millions of Songs</span>
                    <span className="spanTop">Goodreads</span>
                    <span className="spanBottom">Book reviews & recommendations</span>
                    
                </div>
            </div>

            <div className="f-navbar-div">
                <div className="f-nav-content">
                    <span className="spanTop">Amazon Advertising</span>
                    <span className="spanBottom">Find, attract, and engage customers</span>
                    <span className="spanTop">IMDB</span>
                    <span className="spanBottom">Movies, TV & Celebrities</span>
                    <span className="spanTop">Whole Food Market</span>
                    <span className="spanBottom">We Believe in Real Food</span>
                    
                </div>
            </div>


            <div className="f-navbar-div">
                <div className="f-nav-content">
                    <span className="spanTop">Amazon Drive</span>
                    <span className="spanBottom">Cloud Storage from Amazon</span>
                    <span className="spanTop">Amazon Photos</span>
                    <span className="spanBottom">Amazon Photo Storage Free with Prime</span>
                    <span className="spanTop">Amazon Renewed</span>
                    <span className="spanBottom">Like-new products you can trust</span>
                </div>
            </div>


            <div className="f-navbar-div">
                <div className="f-nav-content">
                    <span className="spanTop">Amazon Web Services</span>
                    <span className="spanBottom">Scable Cloud Computing Services</span>
                    <span className="spanTop">Shopbop</span>
                    <span className="spanBottom">Designer Fashion Brands</span>
                    <span className="spanTop">Amazon Second Chance</span>
                    <span className="spanBottom">Pass it on, trade it in, give it a second life</span>
                    
                </div>
            </div>


            <div className="f-navbar-div">
                <div className="f-nav-content">
                    <span className="spanTop">Book Depository</span>
                    <span className="spanBottom">Books with Free Delievery Worldwide</span>
                    <span className="spanTop">Warehouse Deals</span>
                    <span className="spanBottom">Open-Box Discounts</span>
                </div>
            </div>

        </div>

            <div className="f-copyright-div">
                <div className="f-copyright-content">
                <span className="spanTop">Conditions of Use</span>
                <span className="spanTop">Privacy Notice</span>
                <span className="spanTop">Internet-Based Ads</span>
                <span className="spanTop">© 2008-2021, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>


        </div>
    );
  }
  
  export default Footer;