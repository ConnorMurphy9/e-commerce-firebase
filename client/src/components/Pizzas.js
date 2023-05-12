import React from 'react';
import PizzaCard from './PizzaCard';

const Pizzas = ({ pizzas }) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center'>
                Our Pizza Menu
            </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
            Info about our pizzas, text text text text text text text text text text text
            </p>
        </div>
        <div className='max-w-screen-x1 mx-auto py-10 grid grid-cols-4 gap-10'>
            {
              pizzas.map((item) => (
                <PizzaCard key={item.name} pizza={item} />
                
              ))
            }
        </div>
    </div>
  )
}

export default Pizzas;