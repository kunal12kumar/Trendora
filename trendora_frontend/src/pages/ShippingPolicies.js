import React from "react";

export default function Shippingpolicies() {

    return (

        <div className="">
            <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
                <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
                    Shipping Policy
                </h1>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold">Shipping Information:</h2>
                        <p>
                            <span className="font-bold">TrendOra</span> currently ships to over
                            15,000 PIN codes across India.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-blue-700">Shipping Charge:</h2>
                        <p>
                            Shipping charges are dependent on the weight, volume, and location.
                            You can also opt for local pickup and arrange for self-pickup. ODA
                            pin codes may be charged more.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-blue-700">Shipping Time:</h2>
                        <p>
                            Please note processing time is subject to stock availability. While
                            most plain products are dispatched within 1-3 days, in a rare
                            instance where your product is unavailable, we will contact you
                            whether you would like to await for it to be restocked or would
                            prefer a refund instead.
                        </p>

                        <p className="mt-4">
                            Sometimes, delivery time is subject to factors beyond our control,
                            including but not limited to, unexpected travel delays from our
                            courier partners due to weather conditions or any political
                            disruptions or festivals or strikes or lockdowns. Delivery timelines
                            are as shared by courier partners, +3 day variations could occur due
                            to unavoidable circumstances.In such cases, TrendOra will not be held responsible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-blue-700">Processing Time:</h2>
                        <p>
                            On average processing of plain products takes 1-3 business days.  Custom products take 3-8 days to process and are shipped post that. You will receive a whatsapp/ email for print approvals.
                        </p>

                        <p className="mt-4">
                            Delays may occur based on orders being placed on holidays or weekends. However, we take steps to ensure shipment delays are kept at the minimum. If there are any shipping or processing delays on your order, we will notify you as quickly as possible to ensure customer satisfaction.
                        </p>
                    </section>

                    {/* Damaged Parcels */}

                    <section>
                        <h2 className="text-xl font-semibold text-blue-700">Damaged Parcels :</h2>
                        <p>
                            Please make a video while opening the Packaging as supporting proof in case you wish to claim for any return/replacement.  Incase parcel looks like it's been tampered with/ comes open : kindly reject the parcel and inform us immediately. You can refer to our Return & Refund policy for more details.
                        </p>


                    </section>

                    {/* Remote location  */}

                    <section>
                        <h2 className="text-xl font-semibold text-blue-700">Remote Location Shipping :</h2>
                        <p>
                            A minimal surcharge may be applied if your delivery destination is remote/hard to access.  We will email you in case your shipping destination falls under such a zone.
                        </p>


                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-blue-700">Additional Information</h2>
                        <p>
                            For all domestic orders, GST shall be applicable. You will receive a GST invoice once you place an order on your email ID.  In case you need an additional soft copy, email us.
                        </p>

                        <p className="mt-4">
                            If your order has multiple items, these may ship separately from different locations in separate shipments. You will receive tracking links of all items.
                        </p>

                        <p className="mt-4">
                            Please make a video while opening the Packaging as supporting proof in case you wish to claim for any return/replacement.
                        </p>

                        <p className="mt-4">
                            Incase the package is damaged or tampered, immediately contact our customer care at support@TrendOra.com. We will work with you to make sure you receive the right product at the earliest.
                        </p>
                    </section>

                  
                </div>
            </div>



        </div>
    )
}