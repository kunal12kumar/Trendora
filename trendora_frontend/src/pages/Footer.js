import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black font-roboto text-sm text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Collections Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Collections</h4>
          <ul className="space-y-2">
            <li>Men</li>
            <li>Women</li>
            <li>Shades of Blvck</li>
            <li>Accessories</li>
            <li>Collabs</li>
            <li>White</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Information</h4>
          <ul className="space-y-2">
            <li>Returns</li>
            <li>Shipping</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
            <li>Stores</li>
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">More</h4>
          <ul className="space-y-2">
            
            <li>Contact</li>
            <li>Blog</li>
            <li>About</li>
            <li>Affiliate Program</li>
            <li>Member</li>
            <li>Wholesale</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow us</h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span>🐦</span>
              <a href="#" className="hover:underline">Twitter</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📘</span>
              <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📌</span>
              <a href="#" className="hover:underline">Pinterest</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📷</span>
              <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>🎵</span>
              <a href="#" className="hover:underline">TikTok</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
