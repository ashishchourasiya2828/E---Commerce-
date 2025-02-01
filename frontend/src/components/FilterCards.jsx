import React from 'react'

const FilterCards = () => {
  return (
    <div className='relative bg-emerald-400 h-[40vh] w-[27vh] rounded-md shrink-0 overflow-hidden group'>
      <img
        className='h-full w-full object-cover group-hover:scale-105 group-hover:transition-transform duration-300 ease-in-out'
        src="https://www.spottedfashion.com/wp-content/uploads/2013/07/Mulberry-Bright-Red-Shiny-Goat-Del-Rey-Bag.jpg" 
        />

        <div className='absolute h-full w-full left-0 top-0 inset-0 bg-gray-800 bg-opacity-20'>
            <h1 className='mt-7 text-center text-white font-semibold'>Category</h1>
        </div>
    </div>
  )
}

export default FilterCards
