import React from 'react'
import Navbar from "../components/Navbar";
import FilterCards from '../components/FilterCards';
import BestDeals from '../components/BestDeals';

const Home = () => {
  return (
    <div className='w-full relative bg-gray-100'>
      {/* About section */}
      <div className='relative h-[72vh] w-full'>
        {/* background image */}
        <img 
        className='h-full w-full object-cover'
        src="https://bizcon-services.com/wp-content/uploads/2022/12/online-retail-2-1.jpg" 
        />

        {/* text floating layer */}
        <div className='absolute inset-0 bg-gray-800 bg-opacity-20 flex flex-col justify-center items-start pl-16 py-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-emerald-700 drop-shadow-md'>Shopping And</h1>
          <h1 className='text-4xl md:text-6xl font-bold text-emerald-700 drop-shadow-md'>Department Store.</h1>
          <p className='font-semibold mt-4 text-emerald-700 text-lg md:text-sm max-w-lg drop-shadow-md'>Shopping is a bit of a relaxing hobby for me, which <br/>is sometimes troubling for the bank balance.</p>
          {/* learn more btn */}
          <button className='mt-8 px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition duration-300 shadow-lg'>Learn More</button>
        </div>
      </div>
    

      {/* Shop Our Top Categories */}
      <div className='h-[60vh] w-full px-14 py-10 bg-transparent'>
        <h1 className='text-xl mb-5 font-bold text-gray-700 drop-shadow-md'>Shop Our Top Categories</h1>
        
        {/* filter Cards */}
        <div className='topCategory w-full flex overflow-x-scroll scrollbar-hide rounded-md gap-4'>
          <FilterCards />
          <FilterCards />
          <FilterCards />
          <FilterCards />
          <FilterCards />
          <FilterCards />
          <FilterCards />
          <FilterCards />
        </div>
      </div>

      {/* Todays Best Deals For You! */}
      <div className='h-[60vh] w-full bg-transparent px-14 py-10'>
        <h1 className='text-xl mb-5 font-bold text-gray-700 drop-shadow-md'>Todays Best Deals For You!</h1>
        
        {/* Best Deals*/}
        <div className='bestDeals w-full flex overflow-x-scroll scrollbar-hide rounded-md gap-4'>
          <BestDeals />
          <BestDeals />
          <BestDeals />
          <BestDeals />
          <BestDeals />
        </div>

        
      </div>
    </div>
  )
}

export default Home
