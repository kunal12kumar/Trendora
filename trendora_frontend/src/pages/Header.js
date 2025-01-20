// This component is for Header section 
import React from "react";
import loginuser from "../images/white-login-user.png"
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo_image.png"
import { jwtDecode } from "jwt-decode";

export default function Header() {
    const Navigate = useNavigate();
    const islogedin = localStorage.getItem("token")

    return (
        <div className="w-full h-auto fixed z-50 ">
            {/* now the heading for the discount and others part */}

            <div className="w-full h-[50px] bg-[#8b7777] text-2xl text-white text-center py-8 font-roboto items-center flex justify-center  ">
                Get 10% discount on your first Purchase

            </div>
            {/* now for nav which contains the menu , cart ,sign in or sign up section  */}

            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="drawer ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle hover:scale-110" />
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
                            <ul className="menu bg-black flex justify-center  text-2xl text-base-content min-h-full w-80  gap-2">
                                {/* Sidebar content here */}
                                <img className="h-[300px] " src={logo}></img>

                                <Link to={'/bulk_order'}><li className="hover:bg-base-300 rounded-lg p-2">Customize Design</li></Link>
                                <Link to={'/bulk_order'}><li className="hover:bg-base-300 rounded-lg p-2">Bulk Order</li></Link>
                                <Link to={'/sign_in'}><li className="hover:bg-base-300 rounded-lg p-2">Log In</li></Link>
                                <Link to={'/aboutus'}><li className="hover:bg-base-300 rounded-lg p-2">About Us</li></Link>
                                <Link to={'/profile'}><li className="hover:bg-base-300 rounded-lg p-2">Profile</li></Link>
                                <Link to={'/productuploadform'}><li className="hover:bg-base-300 rounded-lg p-2">UploadProduct</li></Link>





                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to={'/'}><a className=" hover:scale-110 text-3xl text-white font-serif">TrendOra</a></Link>
                </div>
                <div className="navbar-end">

                    <div className=" flex gap-8 justify-between ">
                        {/* about us page */}

                        <div className=" cursor-pointer hover:scale-110 text-xl justify-center flex items-center"><Link to={'/aboutus'}>AboutUs</Link></div>

                        {/* for sign in icon  */}
                        <div className="text-xl hover:scale-110 justify-center flex items-center">
                            {islogedin ? (
                                <Link to="/profile"><h1 >Profile</h1></Link>
                            ) : (
                                <Link to={'/sign_up'}><img className=" h-10 w-10 mt-1 " src={loginuser}></img></Link>
                            )}
                            

                        </div>
                        {islogedin ?(<Link to={'/cart'}><div className="dropdown hover:scale-110 dropdown-end">
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
                                    {/* <span className="badge badge-sm indicator-item">8</span> */}
                                </div>
                            </div>
                           
                        </div>
                        </Link>):( '')}
                       
                    </div>
                </div>

            </div>
        </div>
    )
}