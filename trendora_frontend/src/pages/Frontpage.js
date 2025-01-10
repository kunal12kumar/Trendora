// This page is for the image which we will show at the landing page as slider 
import React, { useState, useEffect } from "react";
import frontimage from "../images/frontimage.webp";
import man_image from "../images/men.webp";
import woman_image from "../images/women_2b.webp";
import huddy from "../images/hoddy.webp";
import tshirt from "../images/Tshirt.webp";
import gradient from "../images/Gradient_huddy.webp";
import blazer from "../images/blazer.webp";
import man_huddy from "../images/Men Hoodie Mockup, Front View (1).png"
import ProductList from "./Product";
import couple from  "../images/couple.jpg"
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function Frontpage() {
     const { loginWithRedirect, loginWithPopup, logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0();

     const callingbackend = async () => {
        try {
            if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                console.log(token);

                const response = await axios.post("http://localhost:9000/api/Rsigninuser/usersignin", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("Backend response:", response.data);

            }
            else{
                console.log ("User is not authenticated")
            }

        } catch (error) {
            console.error("Error calling backend:", error);
        }


    }

     useEffect(() => {
            callingbackend();
        },[isAuthenticated]);
    

    return (
        <div className="max-h-screen  w-full">



            <div className="carousel  max-h-screen  w-full">
                <div className="carousel-item  w-full">
                    <img
                        src={frontimage}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img
                        src={couple}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img
                        src={woman_image}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img
                        src={man_image}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img
                        src={tshirt}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img
                        src={gradient}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img
                        src={blazer}
                        className="w-full"
                        alt="Tailwind CSS Carousel component" />
                </div>
            </div>

            {/* Now product  */}
            
            {isAuthenticated && <pre style={{textAlign :'start'}}>{JSON.stringify(user,null,2)}
            </pre>}
            
            

            
        </div>

    )
}