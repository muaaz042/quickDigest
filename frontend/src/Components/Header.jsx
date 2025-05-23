import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center lg:px-18 md:px-10 sm:px-8 px-4 w-full py-2 border-2 border-gray-200'>
        <div className='flex justify-center items-center sm:gap-3 gap-1'>
            <img src="./logo.png" alt="Logo image" className='h-16 w-16' />
            <p className='lg:text-4xl md:text-3xl sm:text-2xl text-sm font-bold'><span className='text-purple-500'>Q</span>uick <span className='text-purple-500'>D</span>igest</p>
        </div>
        <a href="#about" className='lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold'>About</a>
    </div>
  )
}

export default Header
