// This contain the code of bulk order and customization of product where customers can order products in bulk with their own design 

import React from "react";
import "./style.css"
import Header from "./Header";

// Function for compnent


export default function Bulk_order() {

    return (
        <div>
            <Header></Header>
            <div className="min-h-screen  w-full pt-52 ">


                <div className=" mih-h-screen animationonhover rounded-lg bg-[black] p-6  w-[90%]  mx-auto text-white  ">
                    <div className="  flex mx-auto justify-center text-4xl font-roboto border-[2px] rounded-lg border-[white]">New Features</div>
                    <h1 className="flex mx-auto justify-center text-4xl attention m-10 font-roboto text-[yellow] ">Wear your imagination! Create, upload, and own your style</h1>

                    <h1 className="flex mx-auto justify-center text-2xl m-10 font-roboto">Upload your design Here And get your wearings at your doorstep</h1>

                    {/* box to upload your design  */}

                    <input type="file" className="file-input file-input-bordered w-full mx-auto flex justify-center max-w-xs" />




                </div>

                {/* now to take bulk order for tshirts and huddy and other clothes for any fest function and anything  */}



                <div className="mih-h-screen animationonhover rounded-lg bg-[black] p-6  w-[90%]  mx-auto text-white m-12">


                    <div className="  flex mx-auto justify-center text-4xl font-roboto border-[2px] rounded-lg border-[white]">Exciting Deal </div>

                    <h1 className="flex mx-auto justify-center text-4xl attention m-10 font-roboto text-[yellow] ">Gear up for your fest and Chapters! Custom t-shirts and outfits for every team and group.</h1>

                    <h1 className="flex mx-auto justify-center text-2xl m-10 font-roboto">Upload your design Here And get your wearings at your doorstep</h1>

                    <input type="file" className="file-input file-input-bordered w-full mx-auto flex justify-center max-w-xs" />


                    <h1 className="flex mx-auto justify-center text-2xl m-10 font-roboto">For more contact on

                    </h1>










                </div>

            </div>
        </div>
    )
}


