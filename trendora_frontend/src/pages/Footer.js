import React from "react";
import facebook from "../images/icons8-facebook-40.png"
import youtube from "../images/icons8-youtube-40.png";
import instagram from "../images/icons8-instagram-40.png";
import x from "../images/icons8-x-39.png";
import linkedin from "../images/icons8-linkedin-40.png"

const Footer = () => {
  return (
    <footer className="bg-black font-roboto text-sm text-white ">
      
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href=""><img src={facebook}></img></a>
            <a href=""><img src={youtube}></img></a>
            <a href="https://www.instagram.com/trendora7/profilecard/?igsh=NHR0ampsb2t0NjJo"><img src={instagram}></img></a>
            <a href="https://x.com/TrendoraLtd?t=k9Z-z-EkY6fzK8cGRa-hGQ&s=08"><img src={x}></img></a>
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
