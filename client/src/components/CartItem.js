import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/pizzeriaSlice';
import { ToastContainer , toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const dispatch = useDispatch();
    const pizzaData = useSelector((state) => state.pizzeria.pizzaData);
    return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-2x1'>
                Shopping Cart
            </h2>
        </div>
        <div>
            {
                pizzaData.map((item) => (
                    <div
                        key={item.name}
                        className='flex items-center justify-between gap-6 mt-6'
                    >
                        <div className='flex items-center gap-2'>
                            <MdOutlineClose onClick={() => dispatch(deleteItem(item.name))& toast.error} className='text-x1 text-gray-600 hover:text-red-600 cursor-pointer duration-300'/>
                            <img 
                                className='w-32 h-32 object-cover'
                                src={item.img}
                                alt='pizzaImg'
                            />
                        </div>   
                        <h2 className='w-52'>{item.name}</h2>
                        <p className='w-10'>${item.price}</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <span onClick={() => 
                            dispatch(
                                decrementQuantity({
                                    name: item.name,
                                    img: item.img,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description,
                                })
                            )
                            } 
                            className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                            >
                            -  
                            </span>
                            {item.quantity}
                            <span 
                            onClick={() => 
                            dispatch(
                                incrementQuantity({
                                    name: item.name,
                                    img: item.img,
                                    price: item.price,
                                    quantity: 1,
                                    description: item.description,
                                })
                            )
                            } 
                            className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                            >
                            +
                            </span> 
                        </div>
                        <p className='w-14'>${item.quantity * item.price}</p>
                    </div>
                ))}
        </div>
        <button onClick={() => 
            dispatch(resetCart()) & toast.error("Your cart is empty.")
        } 
        className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'>
            Reset Cart
        </button>
        <Link to="/">
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                <span>
                    <HiOutlineArrowLeft />
                </span>
                Back to Menu
            </button>
        </Link>
        <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;