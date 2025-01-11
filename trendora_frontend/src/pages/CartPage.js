// Cart page 
import React from 'react';

const CartPage = () => {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-5xl mx-auto rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">My Bag (1 Item)</h1>

        <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
          You are saving ₹1800 on this order
        </div>

        <div className="flex items-start border-b pb-4 mb-4">
          <img
            src="/path-to-image.jpg"
            alt="Product"
            className="w-24 h-24 rounded-lg mr-4"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Bewakoof Heavy Duty® 1.0</h2>
            <p className="text-gray-600">
              Men's Brown Flame Hashira Graphic Printed Oversized Hoodies
            </p>
            <p className="text-red-500 font-semibold">Hurry! Only 16 Left</p>
            <p className="text-green-500 font-medium">Ships within a few days!</p>
            <div className="flex mt-2 space-x-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="size" className="font-medium">Size:</label>
                <select
                  id="size"
                  className="border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="S">S</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="quantity" className="font-medium">Qty:</label>
                <select
                  id="quantity"
                  className="border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">₹1,399</p>
            <p className="text-green-500 font-medium">You saved ₹1,800</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <h2 className="text-lg font-bold mb-2">Coupons & Offers</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Apply Coupon / Gift Card
          </button>
        </div>

        <div className="border-t pt-4 mt-4">
          <h2 className="text-lg font-bold mb-2">PRICE SUMMARY</h2>
          <div className="flex justify-between mb-2">
            <span>Total MRP (Incl. of taxes)</span>
            <span>₹3,199</span>
          </div>
          <div className="flex justify-between mb-2 text-green-600 font-medium">
            <span>Bag Discount</span>
            <span>-₹1,800</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Subtotal</span>
            <span>₹1,399</span>
          </div>
          <p className="text-green-500 mt-2">Yayy! You get FREE delivery on this order</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;