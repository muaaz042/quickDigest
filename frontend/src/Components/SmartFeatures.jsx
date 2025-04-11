import React from 'react'

const SmartFeatures = () => {
    return (
        <div className='flex items-center justify-center flex-col md:flex-row flex-wrap gap-5 w-full lg:px-18 md:px-10 sm:px-8 px-4 py-4 my-12'>
            <div className='flex items-center justify-evenly flex-1 w-full px-5 py-2 gap-5 h-20 shadow-xl rounded-2xl'>
                <label className="text-base sm:text-lg lg:text-xl sm:font-bold text-gray-900 cursor-pointer" htmlFor="length">
                    Select Length:
                </label>
                <div className="flex items-center justify-center space-x-1 sm:space-x-4">
                    <input type="radio" id="short" name="length" value="Short" />
                    <label htmlFor="short">Short</label>

                    <input type="radio" id="medium" name="length" value="Medium" />
                    <label htmlFor="medium">Medium</label>

                    <input type="radio" id="detailed" name="length" value="Detailed" />
                    <label htmlFor="detailed">Detailed</label>
                </div>
            </div>



            <div className='flex items-center justify-evenly flex-1 w-full px-5 py-2 h-20 shadow-xl rounded-2xl'>
                <label className="text-base sm:text-lg lg:text-xl sm:font-bold text-gray-900 cursor-pointer" htmlFor="tone">
                    Select Tone:
                </label>
                <select className="text-gray-900 border-2 border-purple-500 rounded-md p-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-purple-500 transition ease-in-out duration-150" id="tone">
                    <option value="professional">Professional</option>
                    <option value="simple">Simple</option>
                    <option value="bullet Points">Bullet Points</option>
                    <option value="academic">Academic</option>
                </select>
            </div>
        </div>
    )
}

export default SmartFeatures
