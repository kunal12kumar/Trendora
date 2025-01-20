import Header from "./Header";


import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className=" min-h-screen pt-40 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold  sm:text-5xl">
                            About Us
                        </h1>
                        <p className="mt-4 text-lg ">
                            Welcome to <span className="text-indigo-600 font-semibold">Trendora</span>,
                            your one-stop destination for bulk custom clothing solutions.
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Custom clothing"
                            className="rounded-lg border-white border-[2px] w-full shadow-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">
                            What We Offer
                        </h2>
                        <p className="mt-4 ">
                            At <span className="text-indigo-600 font-semibold">Trendora</span>, we specialize in providing
                            bulk orders for clothing items such as hoodies, t-shirts, and other apparel. Whether you're planning a
                            hackathon, college event, corporate gathering, festival, or any special occasion, we've got you covered.
                        </p>
                        <p className="mt-4 ">
                            Our platform also features a <span className="text-indigo-600 font-semibold">custom design tool</span> that allows
                            customers to upload their designs. These designs can be printed on t-shirts or any other apparel of your choice,
                            ensuring a personalized touch for every event or celebration.
                        </p>
                        <p className="mt-4 ">
                            We are committed to quality, creativity, and customer satisfaction, making it easier than ever to bring your
                            ideas to life on fabric.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-indigo-600 text-white mx-4 py-12 px-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center">
                        Why Choose Trendora?
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">Bulk Orders Made Easy</h3>
                            <p className="mt-2 text-gray-200">
                                Seamlessly place bulk orders for any event or occasion.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">Customizable Designs</h3>
                            <p className="mt-2 text-gray-200">
                                Upload your unique designs to create personalized apparel.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">Top-Notch Quality</h3>
                            <p className="mt-2 text-gray-200">
                                We use high-quality fabrics and printing techniques to ensure satisfaction.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Let’s Bring Your Vision to Life
                    </h2>
                    <p className="mt-4 ">
                        Join thousands of satisfied customers who trust Trendora for their custom clothing needs.
                    </p>
                    <Link to={'/'}><button className="mt-6 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700">
                        Make Your First Order
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
