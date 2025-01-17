// In this page we are showing each product individually about everything when a coustomer select the product
import React, { useState, useEffect } from "react";
import { useFetcher, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';







export function ShowProductIndividualbyId() {

    const navigate = useNavigate();


    const [userInfo, setUserInfo] = useState(null);

    // function to extract 

    const { id } = useParams(); // Extract product ID from the URL
    const [product, setProduct] = useState(null);
    console.log(product);
    const [isFavorite, setIsFavorite] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [location, setLocation] = useState(null);
    const [pincode, setPincode] = useState(null);
    const [error, setError] = useState("");


    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        console.log(`Added ${quantity} item(s) to the cart.`);
    };


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/api/Rproductlist/product/${id}`);
                setProduct(response.data.data);
                setIsFavorite(response.data.isFavorite || false); // Initialize isFavorite based on product data
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();

    }, [id]);

    // finding first image 




    if (!product) {
        return <div>Loading...</div>;
    }



    const addToCart = async () => {
        try {




            // Get token from localStorage
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/log_in"); // Redirect to login if no token found
                return;
            }

            try {
                // Decode the token
                const decoded = jwtDecode(token);
                setUserInfo(decoded); // Set the decoded user information in state
            } catch (error) {
                console.error("Invalid token:", error);
                navigate("/log_in"); // Redirect to login if token is invalid or expired
            }
            const response = await axios.post('http://localhost:9000/api/RAddtocart/addtocart', { productId: product.productid, quantity: quantity },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the header
                    },
                }
            );
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error adding to cart:', error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || error.message)
        }
    };

    const getlivelocation = async () => {

        try {

            // Get token from localStorage
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/log_in"); // Redirect to login if no token found
                return;
            }

            try {
                // Decode the token
                const decoded = jwtDecode(token);
                setUserInfo(decoded); // Set the decoded user information in state
            } catch (error) {
                console.error("Invalid token:", error);
                navigate("/log_in"); // Redirect to login if token is invalid or expired
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });

                        try {
                            const response = await axios.post("http://localhost:9000/api/RAddtocart/getlivelocation", {
                                lat: latitude,
                                lng: longitude,
                            },{
                                headers: {
                                    Authorization: `Bearer ${token}`, // Send the token in the header
                                },
                            });
                            setPincode(response.data.pincode);
                            setError(""); // Clear errors if successful
                        } catch (err) {
                            console.error("Error fetching pincode:", err);
                            setError("Unable to fetch pincode. Try again later.");
                        }
                    },
                    (err) => {
                        console.error("Error getting location:", err);
                        setError("Location access denied. Enable location services.");
                    }
                );
            } else {
                setError("Geolocation is not supported by your browser.");
            }



        } catch (error) {

            console.log(error)

        }
    }





    // To add the product to favourite
    const toggleFavorite = async () => {
        try {
            // Get token from localStorage
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/log_in"); // Redirect to login if no token found
                return;
            }

            try {
                // Decode the token
                const decoded = jwtDecode(token);
                setUserInfo(decoded); // Set the decoded user information in state
            } catch (error) {
                console.error("Invalid token:", error);
                navigate("/log_in"); // Redirect to login if token is invalid or expired
            }

            const response = await axios.post('http://localhost:9000/api/RFavourite/favourites', { productId: product.productid },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send the token in the header
                    },
                }
            );
            setIsFavorite(response.data.isFavorite);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error toggling favorite:', error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || error.message)
        }
    };

    // function for intializing payment

    const handlePayment = async () => {
        try {
            // Call backend to create an order
            const { data } = await axios.post('http://localhost:9000/api/payment/order');

            const options = {
                key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
                amount: data.amount,
                currency: data.currency,
                name: 'Your Website Name',
                description: 'Purchase Description',
                order_id: data.id,
                handler: function (response) {
                    // Handle successful payment
                    alert('Payment successful!');
                    console.log(response);
                    axios.post('http://localhost:9000/api/payment/verify', response)
                        .then(() => alert('Payment Verified!'))
                        .catch(err => console.error(err));
                },
                prefill: {
                    name: 'Your Name',
                    email: 'your-email@example.com',
                    contact: '9999999999',
                },
                notes: {
                    address: 'Razorpay Corporate Office',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Payment error:', error);
        }
    };



    return (

        <div className="container mx-auto p-5">
            <ToastContainer></ToastContainer>
            <div className="flex flex-col md:flex-row gap-5">
                {/* Images */}
                <div className="flex flex-row gap-2 w-full md:w-1/2">
                    <img src={product.images[0]}
                        className="rounded-lg max-h-screen w-[70%] shadow-lg"></img>


                    <div className="flex flex-col gap-2 w-full md:w-1/4">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Product ${index + 1}`}
                                className="rounded-lg h-[33%] w-[90%] shadow-lg"
                            />
                        ))}


                    </div>
                </div>


                {/* Product Info */}
                <div className="w-full flex flex-col gap-4 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-red-500 mb-2">
                        ₹{product.price}{' '}
                        <span className="text-gray-500 text-lg line-through">₹{product.mrp}</span>{' '}
                        <span className="text-green-600">({product.discount}% OFF)</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-xl">★ {product.rating}</span>
                        <span className="ml-2 text-gray-500">({product.ratingsCount} Ratings)</span>
                    </div>

                    {/* Sizes */}
                    <div className="mb-5">
                        {/* <h3 className="text-lg font-semibold mb-2">Select Size</h3> */}
                        {/* <div className="flex gap-3">
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
                                >
                                    {size}
                                </button>
                            ))}
                        </div> */}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center border   text-white  border-gray-300 rounded">
                            <button
                                onClick={handleDecrement}
                                className="px-6 py-3 hover:bg-gray-100 text-[red] focus:outline-none"
                            >
                                -
                            </button>
                            <div className="px-4 py-2 ">{quantity}</div>
                            <button
                                onClick={handleIncrement}
                                className="px-6 py-3 text-[green] hover:bg-gray-200 focus:outline-none"
                            >
                                +
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={addToCart}
                            className="px-6 py-3 bg-pink-500 w-[40%] hover:bg-pink-600 text-white font-semibold rounded "
                        >
                            ADD TO CART
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">

                        <button onClick={toggleFavorite} className="bg-gray-700 text-white px-6 py-3 w-[30%] rounded-lg hover:bg-gray-600">
                            Wishlist
                        </button>
                    </div>

                    <div>

                        <button onClick={handlePayment} className="bg-pink-500 text-white px-6 py-3 mt-10 rounded-lg w-[40%] hover:bg-pink-600">
                            Buy Now
                        </button>

                    </div>

                    {/* Delivery Options */}
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold mb-2">Delivery Options</h3>
                        <div className="border w-[90%] border-gray-300 rounded-md px-4 py-3">
                            <p>Enter your PIN code to check delivery options.</p>
                            <div className="mt-2 flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter PIN code"
                                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                                />
                                <button onClick={''} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                                    Check
                                </button>
                            </div>
                            <div className="p-6 max-w-md mx-auto text-center bg-gray-50 rounded-lg shadow-lg">
                                <h2 className="text-xl font-bold mb-4">Find Your Pincode</h2>
                                <button
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                                    onClick={getlivelocation}
                                >
                                    Check
                                </button>
                                {pincode && (
                                    <p className="mt-4 text-green-600 font-semibold">
                                        Your Pincode is: <span className="font-bold">{pincode}</span>
                                    </p>
                                )}
                                {error && (
                                    <p className="mt-4 text-red-600 font-semibold">
                                        Error: {error}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}