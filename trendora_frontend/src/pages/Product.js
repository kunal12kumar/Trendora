
import React, { useState, useEffect } from "react";
import product from "../Data/Product.js";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    }, [])


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
            <div className="grid sm:grid-cols-5 min-h-screen  gap-4 p-12 grid-cols-1 w-full" >
                {showproductlist}
            </div>
        </div>

    )
}



// defining function or style of the product it will look like on the screen

function ShowProduct({ pro }) {

    console.log(pro)

    const navigate = useNavigate();

    // Handle product click
    const handleProductClick = (id) => {
        console.log(id);
        navigate(`/product/${id}`);
    };








    return (

        <div className="w-full h-[300px] ">
            <div className=" bg-white w-[100%] rounded-lg" onClick={()=>handleProductClick(pro.productid)}>
                <figure>
                    

                    {pro.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Product Image ${index + 1}`}
                            className="w-full h-[250px] object-cover "
                        />
                    ))}

                </figure>
                <div className=" flex justify-center flex-col  items-center">
                    <h1 className="card-title  font-roboto text-black">{pro.name}</h1>
                    <h1 className="text-red-500 font-bold ">₹{pro.price}</h1>
                    

                    
                </div>
            </div>
        </div>
    )
}


// function to show the product individually



