import React from 'react'
import { FaRegHeart } from "react-icons/fa6";

const BestDeals = () => {
  return (
    <div className='h-[60vh] w-[40vh] shrink-0 bg-transparent'>
        
        <div className='relative bg-emerald-400 h-[40vh] w-full rounded overflow-hidden group'>
            <img
                className='h-full w-full object-cover rounded group-hover:scale-[0.98] group-hover:transition-transform duration-300 ease-in-out'
                src="https://www.spottedfashion.com/wp-content/uploads/2013/07/Mulberry-Bright-Red-Shiny-Goat-Del-Rey-Bag.jpg" 
                />

            <div className='absolute h-full w-full left-0 top-0 inset-0 flex justify-end bg-gray-800 bg-opacity-20'>
                <div className='p-2 bg-emerald-400 h-fit w-fit rounded-full mt-2 mr-2'><FaRegHeart className='text-white font-bold'/></div>
            </div>
        
        </div>
        <div className='w-full flex mt-3 items-center justify-between font-semibold'>
            <h1>Product Name</h1>
            <h1><sup>₹</sup><span className='line-through'>300</span><sup className='font-extrabold text-emerald-700 text-sm'>78</sup></h1>
        </div>
        <p className='text-[10px] font-medium text-black'>Lorem ipsum dolor sit amet consectetur.</p>
        <h1 className='text-green-500'>★★★★⯪<span className='text-black text-[10px] ml-1'>1245</span></h1>
        <button className='mt-1 px-2 py-1 bg-transparent border border-gray-600 text-[10px] text-black font-medium rounded-full hover:text-white  hover:bg-emerald-700 transition duration-300 shadow-lg'>Add to Cart</button>
    </div>
  )
}

export default BestDeals
