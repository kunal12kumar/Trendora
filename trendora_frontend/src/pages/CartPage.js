import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/log_in');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserInfo(decoded);
    } catch (err) {
      console.error('Invalid token:', err);
      navigate('/log_in');
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/RAddtocart/productfromcart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(response.data.cart.products || []);
        console.log(response.data);
        console.log(response.data.cart);
        console.log(response.data.cart.products);
      } catch (err) {
        console.error('Failed to fetch cart:', err.response || err);
      }
    };

    fetchCart();
  }, [navigate]);

  // length of cart to count the product 

  const length= cart.length

  if (!userInfo) return <div className="text-center mt-8">Redirecting to login...</div>;

  return (
    <div className=" min-h-screen py-6">
      <div className="max-w-6xl bg-black mx-auto shadow-md rounded-lg p-6">
        {/* Cart Header */}
        <h1 className="text-2xl font-bold mb-4">No. of Product in Bag {length}</h1>

        {/* Savings Banner */}
        <div className="bg-green-100 text-green-700 py-3 px-4 rounded-lg mb-6">
          You are saving ₹1800 on this order
        </div>

        {/* Cart Item */}
        <div className="grid lg:grid-cols-12 gap-6 items-center mb-6">
          <div className="lg:col-span-8 bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center">
              {/* Product Image */}
              <img
                src={cart[0].images}
                alt={cart[0].name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="ml-4 flex-1">
                {/* Product Info */}
                <h2 className="text-lg text-black font-semibold">{cart[0].name}</h2>
                <p className="text-sm text-black">{cart[0].description}</p>
                <p className="text-sm text-red-500">Hurry! Only 11 Left</p>
                <p className="text-sm text-green-600">Ships within a few days!</p>
                <div className="mt-2 flex space-x-4">
                  {/* Size Dropdown */}
                  <div>
                    <label className="text-sm text-gray-500">Size:</label>
                    <select className="ml-2 px-2 py-1 border rounded">
                      <option>{cart[0].size}</option>
                    </select>
                  </div>
                  {/* Quantity Dropdown */}
                  <div>
                    <label className="text-sm text-gray-500">Qty:</label>
                    <select className="ml-2 px-2 py-1 border rounded">
                      <option>{cart[0].quantity}</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Remove Button */}
              <button className="text-red-500 hover:text-red-700 ml-auto">
                ✖
              </button>
            </div>
          </div>
        </div>

        {/* Coupons and Price Summary */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Coupons Section
          <div className="lg:col-span-8">
            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Coupons & Offers</h2>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Apply Coupon / Gift Card"
                  className="flex-1 border rounded p-2"
                />
                <button className="ml-2 px-4 py-2 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500">
                  Apply
                </button>
              </div>
            </div>
          </div> */}

          {/* Price Summary Section */}
          <div className="lg:col-span-4 bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Price Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Total MRP (Incl. of taxes)</p>
                <p className='text-black'>{cart[0].price}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Bag Discount</p>
                <p className="text-green-600">-₹1800</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Delivery Fee</p>
                <p className="text-green-600">Free</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <p>Subtotal</p>
                <p>₹1399</p>
              </div>
              <p className="text-green-600 text-sm">Yayy! You get FREE delivery on this order</p>
            </div>
            <button className="w-full bg-yellow-400 text-white py-3 mt-4 rounded font-semibold hover:bg-yellow-500">
              PROCEED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
