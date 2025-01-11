import React from "react";
import { Link } from "react-router-dom";
import facebook from "../images/icons8-facebook-40.png"
import youtube from "../images/icons8-youtube-40.png";
import instagram from "../images/icons8-instagram-40.png";
import x from "../images/icons8-x-39.png";
import linkedin from "../images/icons8-linkedin-40.png"

const Footer = () => {
  return (
    <footer className="bg-black font-roboto text-sm text-white ">

      
      
      <footer className="footer footer-center bg-base-700 text-base-content rounded p-10">



      <div className="">
        <h1 className=" text-xl font-semibold "> Policies</h1>

        <nav className="grid grid-flow-col gap-4">
       <Link to={'/shippingpolicy'}><a className="link link-hover">Shipping Policy</a></Link>   
       <Link to={'/refundpolicy'}> <a className="link link-hover">Refund Policy</a></Link>   
       <Link to={'/privacypolicy'}> <a className="link link-hover">Privacy Policy</a></Link>   
          
          
        </nav>

      </div>
        <nav className="grid grid-flow-col gap-4">
         <Link to={'/aboutus'}> <a className="link link-hover">About us</a>  </Link>
         <Link to={'/contactus'}> <a className="link link-hover">Contact</a>  </Link>
         
          
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href=""><img src={facebook}></img></a>
            <a href=""><img src={youtube}></img></a>
            <a href="https://www.instagram.com/trendora7/profilecard/?igsh=NHR0ampsb2t0NjJo"><img src={instagram}></img></a>
            
            <a href="https://www.linkedin.com/in/trendora-a70385343"><img src={linkedin}></img></a>
            
            
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Trendora Private Ltd</p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
