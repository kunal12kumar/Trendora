
import React, { useState, useEffect } from "react";
import product from "../Data/Product.js";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


export default function ProductList() {






    // now to load all the products from backend

    const [productlist, setproductlist] = useState([]);
    console.log(productlist)

    // defining function to load all the product 

    const LoadingProduct = async () => {

        try {
            const response = await axios.post('http://localhost:9000/api/Rproductlist/productlist')
            if (response.status === 200) {
                setproductlist(response.data.data);
                console.log(response.data.data);
                console.log('Updated productlist:', response.data.data); 

                // setting all the hospital data into the setproductlist
                
            }

        } catch (error) {

            console.log(error)

        }
    }



    // To do product favourite


    // To add the product to cart




    // now to define to show the productlist;

    



    useEffect(() => {
        LoadingProduct()
        console.log("Productlist loading successfull")
    },[])


    // Render the product list or a loading message
    const showproductlist = productlist && productlist.length > 0 ? (
        productlist.map((v, i) => <ShowProduct key={v.id} pro={v} />)
        
    ) : (
        <p className="text-3xl font-serif text-[#5c5caa]">Loading Products...</p>
    );






    return (
        // This is for outer boundary 
        <div className="min-h-screen">
            <ToastContainer />
            <h1 className="flex justify-center items-center text-5xl py-7">Our Products</h1>
            <div className="grid sm:grid-cols-3 gap-5 p-12 grid-cols-1">
                {showproductlist}
            </div>
        </div>

    )
}



// defining function or style of the product it will look like on the screen

function ShowProduct({ pro }) {

    console.log(pro)

    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);

    const [userInfo, setUserInfo] = useState(null);

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
            const response = await axios.post('http://localhost:9000/api/RAddtocart/addtocart', { productId: pro.id },
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

            const response = await axios.post('http://localhost:9000/api/RFavourite/favourites', { productId: pro.id },
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



    return (

        <div className="">
            <div className="card bg-base-100 w-[300px] shadow-xl">
                <figure>
                    <img className="w-full h-[300px]"
                        src={pro.image}
                        alt={pro.category} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto font-roboto">{pro.name}</h2>

                    <div className="card-actions justify-around">
                        <button onClick={addToCart} className="btn btn-primary">Add To Cart</button>
                        <button className="btn btn-primary">Buy Now</button>
                        <button onClick={toggleFavorite} className="btn btn-primary">
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}