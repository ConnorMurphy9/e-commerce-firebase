import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { addToCart } from '../redux/pizzeriaSlice';
import { ToastContainer, toast } from 'react-toastify';

const Pizza = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div className='max-w-screen-x1 mx-auto my-10 flex gap-10'>
      <div className='w-2/5 relative'>
        <img 
          className='w-full h-[550px] object-cover'
          src={details.img}
          alt="pizzaImg"
        />
        <div className='w-3/5 flex flex-col justify-center gap-12'>
          <div>
            <h2 className='text-4x1 font-semibold'>{details.title}</h2>
            <div className='flex items-center gap-4 mt-3'>
              <p className='text-2x1 font-medium text-gray-900'>
                ${details.price}
              </p>
            </div>
            <p className='text-base text-gray-500 -mt-3'>{details.description}</p>
            <div className='flex gap-4'>
              <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                <p className='text-sm'>Quantity</p>
                <div className='flex items-center gap-4 text-sm font-semibold'>
                  <button onClick={()=> setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)} 
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
                    -
                  </button>
                  <span>{baseQty}</span>
                  <button onClick={()=> setBaseQty(baseQty + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
                    +
                  </button>
                  <button 
                  onClick={() => 
                    dispatch(
                      addToCart({
                        name: details.name,
                        img: details.img,
                        price: details.price,
                        quantity: baseQty,
                        description: details.description,
                      })
                    ) & toast.success(`${details.name} is added`)
                  } className='bg-black text-white py-3 px-6 active:bg-gray-800'>Add to Cart</button>
                </div>
              </div>  
            </div>
          </div>

        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
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
  )
}

export default Pizza;