import React from "react";
import cart from "../assets/shopping-cart-logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const pizzaData = useSelector((state) => state.pizzeria.pizzaData);
    console.log(pizzaData);
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
            <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between"> 
                <Link to="/">
                    <div>
                        Pizzeria
                    </div>
                </Link> 
                <div>
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Home</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Pages</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Shop</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Home?</li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Contact</li>
                    </ul>
                    <Link to="/cart">
                        <div className="relative">
                            <img className="w-6" src={cart} alt="cartImg" />
                            <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                                {pizzaData.length}
                            </span>
                    </div>
                    </Link>
                    {/* <img className="w-8 h-8 rounded-full" 
                        src=""
                        alt="userLogo"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Header;