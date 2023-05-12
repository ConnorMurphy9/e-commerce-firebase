import React from 'react'

const PizzaCard = ({ pizza }) => {

  return (
    <div>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
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
        <div className='font-semibold'>
          <p>{pizza.price}</p>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard;