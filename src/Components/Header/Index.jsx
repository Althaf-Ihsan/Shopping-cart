import { Link } from "react-router-dom"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeCart } from "../../Store/slices/CartSlice"
const Header = () => {
    return (
        <div>
            <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
                <Link to="/">
                    <div className='ml-5'>
                        <h1 className='text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wider'>Shopping Cart</h1>
                    </div>
                </Link>
                <ul className="flex items-center space-x-6 font-semibold text-gray-800">
                    <Link to='/'>
                        <li className="cursor-pointer list-none">Home</li>
                    </Link>
                    <Link to='/cart'>
                        <li className="cursor-pointer">Cart</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

const ProductTitle = ({ product }) => {
    const { cart } = useSelector(state => state)
    const dispatch = useDispatch();
    function handleCart() {
        dispatch(addToCart(product))
    }
    const handleRemoveCart = () => {
        console.log("Removed")
        dispatch(removeCart(product.id))
    }
    return (
        <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
            <div className="h-[180px]">
                <img src={product.image} alt={product.title} className="object-cover h-full w-full" />
            </div>
            <div className="">
                <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">{product.title}</h1>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
                <button className="bg-red-950 text-white font-semibold p-4 broder-2 rounded-lg" onClick={cart.some(item => item.id == product.id) ? handleRemoveCart : handleCart}>
                    {cart.some(item => item.id == product.id) ? "Remove from cart" : "Add to cart"}
                </button>
            </div>
        </div>
    )
}
const CartTitle = ({ cartItem }) => {
    const dispatch=useDispatch()
    const handleRemoveCart = () => {
        console.log("Removed")
        dispatch(removeCart(cartItem.id))
    }
    return (
        <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
            <div className="flex p-3">
                <img src={cartItem.image} className="h-28 rounded-lg" alt={cartItem.title} />
                <div className="m-10 self-start space-y-5 ">
                    <h1 className="text-xl text-white font-bold">{cartItem.title}</h1>
                    <p className="text-white font-extrabold">{cartItem.price}</p>
                </div>
            </div>
            <div>
            <button className="bg-red-950 text-white font-semibold p-4 broder-2 rounded-lg p-4" onClick={handleRemoveCart}>
            Remove from Cart
        </button>
            </div>
        </div>

    )
}
export {
    Header,
    ProductTitle,
    CartTitle
}