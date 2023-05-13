import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/pizzeriaSlice';
import { ToastContainer, toast } from 'react-toastify';

const PizzaCard = ({ pizza }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = pizza.name;
  const idString = (_id) => {
    return String(_id).toLowerCase().split("").join("");
  }; 
  const rootId = idString(_id);
 console.log(rootId);

  const handleDetails = () => {
    navigate(`/pizza/${rootId}`, {
      state:{
        item: pizza,
      },
    })
    console.log("details");
  }
  return (
    <div className='group relative'>
      <div 
        onClick={handleDetails}
        className='w-full h-96 cursor-pointer overflow-hidden'
      >
        <img 
          className='w-full h-full object-cover group-hover:scale-110 duration-500'
          src={pizza.img} 
          alt="pizzaImg"
          />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex justify-between items-center'>
          <h2 className='font-titleFont text-base font-bold'>
            {pizza.name}
          </h2>
        </div>
        <div className='flex justify-end gap-2 relative overflow-hidden w-28 text-sm'>
          <div className='flex gap-2 transform group-hover:translate-x-24-transition-transform duration-500'>
            <p className='font-semibold'>{pizza.price}</p>
          </div>
        </div>
     
        <p onClick={() => 
          dispatch(
            addToCart({
          name: pizza.name,
          img: pizza.img,
          price: pizza.price,
          quantity: 1,
          description: pizza.description,
            })
        )  & toast.success(`${pizza.name} is added`)
        } 
        className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>
          Add to Cart{" "} 
          <span>
            <BsArrowRight />
          </span>
        </p>
      </div>
      <div>
        <p>{pizza.description}</p>
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

export default PizzaCard;