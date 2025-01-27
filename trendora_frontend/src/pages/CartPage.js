import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Header from "./Header";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [totalprice, settotalprice] = useState(null)
  const [totaldiscount, settotaldiscount] = useState(null)
  const [priceafterdiscount, setpriceafterdiscount] = useState(null)
  const [deliveryfee, setdeliveryfee]=useState(49)
  const islogedin=localStorage.getItem("token")

  useEffect(() => {
    const token = localStorage.getItem("token");



    if (!token) {
      navigate("/log_in");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserInfo(decoded);
    } catch (err) {
      console.error("Invalid token:", err);
      navigate("/log_in");
      return;
    }

    const fetchCart = async () => {
      const restapikey=process.env.REACT_APP_API_BASE_URL
      try {
        const response = await axios.get(
          `${restapikey}/RAddtocart/productfromcart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data?.cart?.products) {
          console.log(setCart(response.data.cart.products));
          console.log("Cart Products:", response.data.cart.products);
        } else {
          console.error("No products found in the cart.");
        }


      } catch (err) {
        console.error("Failed to fetch cart:", err.response || err);
      }
    };




    fetchCart();
  }, [navigate]);


  // New useEffect to calculate total price and discount whenever the cart updates
  useEffect(() => {
    if (cart.length > 0) {
      console.log("Cart updated:", cart);

      const sumprice = cart.reduce((acc, item) => {
        const quantity = item?.quantity || 1; // Default quantity to 1 if undefined or 0
        return acc + (item?.price * quantity || 0);
      }, 0);

      const sumdiscount = cart.reduce((acc, item) => acc + (item?.discount || 0), 0);
      const kpriceafterdiscount = (sumprice - sumdiscount)
      setpriceafterdiscount(kpriceafterdiscount)

      console.log("Total Price:", sumprice);
      console.log("Total Discount:", sumdiscount);
      console.log("Total priceafterdiscount", (sumprice - sumdiscount))

      settotalprice(sumprice); // Update total price state
      settotaldiscount(sumdiscount); // Update total discount state
    }
  }, [cart]); // Re-run this logic whenever cart updates

  const handleDeleteProduct = async (productid) => {
    const restapikey=process.env.REACT_APP_API_BASE_URL
    const token = localStorage.getItem("token");

    try {
      const response = await axios.postForm(
        `${restapikey}/RAddtocart/removeproduct/${productid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Update the frontend cart state
        setCart(cart.filter((item) => item.productid !== productid));
        console.log("Product removed successfully:", response.data.message);
      } else {
        console.error("Failed to remove product:", response.data.message);
      }
    } catch (err) {
      console.error("Error removing product:", err.response || err);
    }
  };





  const length = cart.length;

  if (!userInfo)
    return <div className="text-center mt-8">Redirecting to login...</div>;

  return (
    <div>
      <Header></Header>
      <div className="min-h-screen pt-36 pb-12">
      

        {islogedin ?(<div className="max-w-6xl bg-black mx-auto shadow-md rounded-lg p-6">
          {/* Cart Header */}
          <h1 className="text-2xl font-bold mb-4">
            No. of Product in Bag {length}
          </h1>

          {/* Savings Banner */}
          <div className="bg-green-100 text-green-700 py-3 px-4 rounded-lg mb-6">
            You are saving ₹{totaldiscount} on this order
          </div>

          <div className="">
            {/* Cart Items */}
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 gap-6 items-center mb-6"
                >
                  <div className="lg:col-span-8 bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      {/* Product Image */}
                      <img
                        src={item.images}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="ml-4 flex-1">
                        {/* Product Info */}
                        <div className="flex flex-row justify-between ">
                          <h2 className="text-lg text-black font-semibold">
                            {item.name}
                          </h2>
                          <p className="text-lg  text-black"> ₹ {item.price}</p>
                        </div>

                        <p className="text-sm text-red-500">
                          Hurry! Only {item.stock || "a few"} Left
                        </p>
                        <p className="text-sm text-green-600">
                          Ships within a few days!
                        </p>
                        <div className="mt-2 flex space-x-4">
                          {/* Size Dropdown */}
                          <div>
                            <label className="text-sm text-gray-500">Size:</label>
                            <select
                              value={item.size || ""}
                              className="ml-2 px-2 py-1 border rounded"
                              readOnly
                            >
                              <option>{item.size || "N/A"}</option>
                            </select>
                          </div>
                          {/* Quantity Dropdown */}
                          <div>
                            <label className="text-sm text-gray-500">Qty:</label>
                            <select
                              value={item.quantity || 1}
                              className="ml-2 px-2 py-1 border rounded"
                              readOnly
                            >
                              <option>{item.quantity || 1}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* Remove Button */}
                      <button onClick={() => handleDeleteProduct(item.productid)} className="text-red-500 hover:bg-black items-center rounded-sm flex justify-center hover:text-red-700 w-[20px] h-[20px] ml-auto">
                        ✖
                      </button>
                    </div>
                  </div>
                </div>





              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}

            {/* Coupons and Price Summary */}

            {/* Coupons Section */}
            {/* <div className="lg:col-span-8">
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





            <div className="lg:col-span-4 bg-gray-100 rounded-lg p-2 shadow-md">
              <h2 className="text-lg text-black font-semibold mb-2">Price Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-gray-600">Total MRP (Incl. of taxes)</p>
                  <p className="text-black">₹{totalprice  || 0}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Bag Discount</p>
                  <p className="text-green-600">{totaldiscount || 0}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-600">Delivery Fee</p>
                  <p className="text-green-600">{deliveryfee}</p>
                </div>
                <hr className="my-2" />
                <div className="flex text-black justify-between font-bold">
                  <p>Subtotal</p>
                  <p>₹ {totalprice - totaldiscount+ deliveryfee}</p>
                </div>
                <p className="text-green-600 text-sm">
                  Yayy! You get FREE delivery on this order
                </p>
              </div>
              <button className="w-full bg-yellow-400 text-white py-3 mt-4 rounded font-semibold hover:bg-yellow-500">
                PROCEED
              </button>
            </div>









          </div>
        </div>):(
          <Link to={'/log_in'}><div className="flex mx-auto justify-center items-center text-2xl border-2 w-[20%] rounded-md font-roboto p-4">Log In</div></Link>
        )}


      </div>
    </div>
  );
};

export default Cart;
