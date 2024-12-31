// This component is for Header section 
import React from "react";
import loginuser from "../images/white-login-user.png"
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="w-full h-auto fixed z-50 ">
            {/* now the heading for the discount and others part */}

            <div className="w-full h-[50px] bg-[#8b7777] text-2xl text-white font-roboto items-center flex justify-center  ">
                Trendora

            </div>
            {/* now for nav which contains the menu , cart ,sign in or sign up section  */}

            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn bg-[black] border-[black] btn-primary drawer-button"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white rounded-lg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="  text-3xl text-white font-roboto">Trendora</a>
                </div>
                <div className="navbar-end">
                    <div className=" flex gap-4 justify-between ">
                        {/* for sign in icon  */}
                        <div>
                            <Link to={'/sign_in'}><img className=" h-10 w-10 mt-1 " src={loginuser}></img></Link>

                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-white rounded-md"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}