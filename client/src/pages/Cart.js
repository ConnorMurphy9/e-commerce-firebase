import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
// import cart from "../assets/shopping-cart-logo.jpg";
import CartItem from '../components/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const Cart = () => {
  const pizzaData = useSelector((state) => state.pizzeria.pizzaData);
  const userInfo = useSelector((state) => state.pizzeria.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    pizzaData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [pizzaData]);
const handleCheckout = () => {
  if(userInfo) {
    setPayNow(true)
  } else {
    toast.error("Please sign in to checkout.")
  }
}

const payment = async(token) => {
  await axios.post("http://localhost:3005/pay", {
    amount: totalAmt * 100,
    token: token,
  })
}

  return (
    <div>
      {/* <img 
        className='w-full h-60 object-cover' 
        src={cart}
        alt='cartImg'
      /> */}
      <div className='max-w-screen-x1 mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2x1 font-medium'>Cart Totals</h2>
            <p className=' flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-bold text-lg'>
                ${totalAmt}
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
           
            Total <span className='text-x1 font-bold'>${totalAmt}</span>
          </p>
          <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            Proceed to Checkout
          </button>
          {
            payNow && (
            <div className='w-full mt-6 flex items-center justify-center'>
                <StripeCheckout 
                  stripeKey='pk_test_51N7SUuGGjUQip6yP0RguSjPk0xeWfn5qsLHEC3Se04vXj7OntaeYGdBpgPEm5pSHoLodWo3cHsEE0PCNLPeqTGpg0031TSLZEb'
                  name="React Firebase Pizzeria"
                  amount={totalAmt * 100}
                  label='Pay to pizzeria'
                  description={`Your payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
          )}
        </div>
      </div>
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
  )
}

export default Cart;