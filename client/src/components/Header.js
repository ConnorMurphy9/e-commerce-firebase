import React from "react";
import cart from "../assets/shopping-cart-logo.jpg"

const Header = () => {
    return (
        <div className="w-full h-20 bg-white border-b-gray-800">
            <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between"> 
                <div>
                    Pizzeria
                </div>
         
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
                    <div className="relative">
                        <img className="w-6" src={cart} alt="cartImg" />
                        <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                            0
                        </span>
                    </div>
                    <img className="w-8 h-8 rounded-full" 
                        src=""
                        alt="userLogo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;