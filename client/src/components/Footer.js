import React from 'react';
import bankCards from "../assets/bankCards.jpg";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
       <div className='max-w-screen-x1 mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-56' src={bankCards} alt='bankCards' />
                (RESTAURANT LOGO GOES HERE, 42:22)
                <div className='flex gap-5 text-lg text-gray-400'>
                <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
                <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
            </div>
            </div>
       
            
            <div>
                <h2 className='text-2x1 font-semibold text-white mb-4'>contact us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Georgia's Finest Pizzeria</p>
                    <p>Phone: 012-345-6789</p>
                    <p>fakepizzeria@gmail.com</p>
                </div>
            </div>
            <div>
                <h2 className='text-2x1 font-semibold text-white mb-4'>profile</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <BsPersonFill />
                        </span>
                        My Profile
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <BsPaypal />
                        </span>
                        Checkout
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <FaHome />
                        </span>
                        Order Tracking
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span className='text-lg'>
                            <MdLocationOn />
                        </span>
                        Support
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm'
                    placeholder='e-mail'
                    type='text'
                />
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
                    Subscribe
                </button>
            </div>
       </div>
    </div>
  )
}

export default Footer