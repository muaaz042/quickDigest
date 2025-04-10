import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center lg:px-18 md:px-10 sm:px-8 px-4  py-2 border-2 border-purple-500'>
        <div className='flex justify-center items-center sm:gap-3 gap-1'>
            <img src="./logo.png" alt="Logo image" className='h-16 w-16' />
            <p className='lg:text-4xl md:text-3xl sm:text-2xl text-lg sm:font-bold'><span className='text-purple-500'>Q</span>uick <span className='text-purple-500'>D</span>igest</p>
        </div>
        <p className='lg:text-4xl md:text-3xl sm:text-2xl text-lg sm:font-bold '>AI Text Summarizer</p>
    </div>
  )
}

export default Header
