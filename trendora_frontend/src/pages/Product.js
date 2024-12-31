import React from "react";
import product from "../Data/Product.js";

export default function ProductList() {

    return (
        // This is for outer boundary 
        <div className="min-h-screen  ">
            <h1 className="flex justify-center items-center text-5xl py-7 "> Our Products</h1>

            

            <div className="grid sm:grid-cols-3 gap-5 p-12 grid-cols-1">

            {/* writing function for showing product  */}
            {
                product.map((products, index) => (
                    <div className="">
                        <div className="card bg-base-100 w-[300px] shadow-xl">
                            <figure>
                                <img className="w-full h-[300px]"
                                    src={products.image}
                                    alt={products.category} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title mx-auto font-roboto">{products.name}</h2>
                               
                                <div className="card-actions justify-around">
                                    <button className="btn btn-primary">Add To Cart</button>
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))


            }
            </div>

        </div>

    )
}