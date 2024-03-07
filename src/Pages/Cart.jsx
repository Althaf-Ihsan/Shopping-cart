import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartTitle } from '../Components/Header/Index'
const Cart = () => {
    const { cart } = useSelector(state => state)
    const [totalCart, seTtotalCart] = useState(0)
    console.log(cart)
    useEffect(() => {
        const total = cart.reduce((acc, curr) => acc + curr.price, 0)
        seTtotalCart(total)
    }, [cart])
    console.log(totalCart)
    return (
        <div className="flex justify-center">
        {cart && cart.length ? (
          <>
            <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center items-center p-3">
                {cart.map((cartItem) => (
                  <CartTitle cartItem={cartItem} />
                ))}
              </div>
            </div>
            <div className="w-[300px]">
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-bold text-lg text-red-800">
                 Cart Summary
                </h1>
                <p>
                  <span className="text-gray-800 font-bold">Total Item</span>
                  <span>: {cart.length}</span>
                </p>
                <p className='ml-16'>
                  <span className="text-gray-800 font-bold">Total Amount</span>
                  <span>: {totalCart}</span>
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-800 font-bold text-xl mb-2">
              Your cart is empty
            </h1>
            <Link to="/">
              <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                SHOP NOW
              </button>
            </Link>
          </div>
        )}
      </div>
           
    )
}

export default Cart