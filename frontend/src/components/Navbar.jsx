import React, { useState } from 'react'
import { MdPersonOutline } from "react-icons/md";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='w-full py-3 mb-2 bg-emerald-200 flex items-center justify-evenly text-xs text-gray-700 font-medium cursor-default'>
      
      {/*nav1  logo */}
      <div className='relative h-10'>
       <img className='h-10 absolute -left-12' src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Emblem.png" />
       <h1 className='text-2xl text-blue-500 font-bold'>snap<span className='text-pink-400'>Cart</span></h1>
      </div>
      
      {/* nav2 */}
      <div className='relative flex items-center gap-10'>
        
        {/* Trigger Element */}
        <div onMouseEnter={() => setIsModalOpen(true)}
            onMouseLeave={() => setIsModalOpen(false)}
            className="flex items-center gap-1 cursor-pointer">

                <h1 className="p-1">Categories</h1>
                <FaChevronDown className={`transition-transform ${isModalOpen ? "rotate-180" : "rotate-0"}`} />

            {/* Dropdown menu    */}
            {isModalOpen && (
                <div
                className="absolute top-full left-0 z-10 w-48 shadow-lg bg-white rounded-lg border border-gray-200"
                onMouseEnter={() => setIsModalOpen(true)}
                onMouseLeave={() => setIsModalOpen(false)}
                >
                <ul className="flex flex-col cursor-pointer">
                    <li className="hover:bg-gray-100 rounded px-3 py-3 text-gray-700">Category 1</li>
                    <li className="hover:bg-gray-100 rounded px-3 py-3 text-gray-700">Category 2</li>
                    <li className="hover:bg-gray-100 rounded px-3 py-3 text-gray-700">Category 3</li>
                    <li className="hover:bg-gray-100 rounded px-3 py-3 text-gray-700">Category 4</li>
                </ul>
                </div>
            )}
        </div>
        
        <h1>Deals</h1>
        <h1>What's New</h1>
        <h1>Delivery</h1>
      </div>
      
      {/* nav3 */}
      <div className='flex items-center gap-10'>

        {/* search bar */}
        <div className="relative w-full max-w-md">
        <input
            type="search"
            placeholder="Search Product"
            className="w-full bg-gray-100 rounded-lg shadow pl-4 pr-10 py-2 text-gray-700 outline-none"
        />
        <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
        
        <div className='flex items-center gap-1'>
            <h1 className='text-xl'><MdPersonOutline/></h1>
            <h1 className=''> Account</h1>
        </div>
        
        <div className='flex items-center gap-1'>
            <h1 className='text-xl'><LiaShoppingCartSolid /></h1>
            <h1>Cart</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
