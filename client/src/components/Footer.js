import React from 'react';

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";


const Footer = () => {
  return (
    <div className='bg-orange-400 text-[#949494] py-20 font-titleFont'>
       <div className='max-w-screen-x1 mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7 text-white font-semibold'>
               
                Connor's Pizzeria, Inc.
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
                <div className='text-base flex flex-col gap-2 text-gray-700'>
                    <p>Connor's Pizzeria</p>
                    <p>Phone: 012-345-6789</p>
                    <p>fakepizzeria@gmail.com</p>
                </div>
            </div>
       
            <div className='flex flex-col justify-center text-gray-700'>
                <input className='bg-transparent border px-4 py-2 text-sm text-gray-700'
                    placeholder='Enter your email here'
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