// This page is for the image which we will show at the landing page as slider 
import React from "react";
import frontimage from "../images/frontimage.webp";
import man_image from "../images/men.webp";
import woman_image from"../images/women_2b.webp";
import huddy from "../images/hoddy.webp";
import tshirt from "../images/Tshirt.webp";
import gradient from "../images/Gradient_huddy.webp";
import blazer from "../images/blazer.webp";

export default function Frontpage() {

    return (



        <div className="carousel  max-h-screen  w-full">
            <div className="carousel-item  w-full">
                <img
                    src={frontimage}
                    className="w-full"
                    alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full">
                <img
                    src={huddy}
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

    )
}