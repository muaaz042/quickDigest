import React, { useState } from 'react';
import { MdOutlineContentCopy } from "react-icons/md";
import { ToastContainer, toast, Zoom } from 'react-toastify';

const Summarizer = () => {
    const [length, setLength] = useState('Short'); // Default selected radio button
    const [tone, setTone] = useState('professional'); // Default selected dropdown option
    const [inputText, setInputText] = useState(''); // Input textarea
    const [output, setOutput] = useState(''); // Output textarea


    const handleSummarize = () => {
        // Example processing logic
        const summary = `Length: ${length}, Tone: ${tone}\n\n${inputText}`;
        setOutput(summary);
      };      


    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        toast.success('Text Copied!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
        });
    }


    return (
        <div className='lg:px-18 md:px-10 sm:px-8 px-4'>
            <div className='flex items-center justify-center flex-col md:flex-row flex-wrap gap-5 w-full sm:my-12 my-5'>
                <div className='flex items-center justify-evenly flex-1 w-full px-5 py-2 gap-5 h-20 shadow-xl rounded-2xl border-2 border-gray-200'>
                    <label className="text-base sm:text-lg lg:text-xl sm:font-bold text-gray-900 cursor-pointer" htmlFor="length">
                        Select Length:
                    </label>
                    <div className="flex items-center justify-center space-x-1 sm:space-x-4">
                        <input
                            type="radio"
                            id="short"
                            name="length"
                            value="Short"
                            checked={length === 'Short'}
                            onChange={(e) => setLength(e.target.value)}
                            className="accent-purple-500"
                        />
                        <label htmlFor="short">Short</label>

                        <input
                            type="radio"
                            id="medium"
                            name="length"
                            value="Medium"
                            checked={length === 'Medium'}
                            onChange={(e) => setLength(e.target.value)}
                            className="accent-purple-500"
                        />
                        <label htmlFor="medium">Medium</label>

                        <input
                            type="radio"
                            id="detailed"
                            name="length"
                            value="Detailed"
                            checked={length === 'Detailed'}
                            onChange={(e) => setLength(e.target.value)}
                            className="accent-purple-500"
                        />
                        <label htmlFor="detailed">Detailed</label>

                    </div>
                </div>

                <div className='flex items-center justify-evenly flex-1 w-full px-5 py-2 h-20 shadow-xl rounded-2xl border-2 border-gray-200'>
                    <label className="text-base sm:text-lg lg:text-xl sm:font-bold text-gray-900 cursor-pointer" htmlFor="tone">
                        Select Tone:
                    </label>
                    <select
                        id="tone"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="text-gray-900 border-2 border-purple-500 rounded-md p-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-purple-500 transition ease-in-out duration-150"
                    >
                        <option value="professional">Professional</option>
                        <option value="simple">Simple</option>
                        <option value="bullet Points">Bullet Points</option>
                        <option value="academic">Academic</option>
                    </select>

                </div>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <div className='flex justify-center items-end flex-col gap-3 flex-1 w-full'>
                    <textarea
                        name="inputText"
                        id="inputText"
                        placeholder='Paste your text and press "Summarize"'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="p-3 border-2 border-gray-300 rounded-2xl outline-purple-500 h-96 w-full resize-none"
                    />

                    <div className='flex justify-end w-full h-12'>
                        <button onClick={handleSummarize}
                            class="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
                        >
                            <span
                                class="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"
                            ></span>
                            <span class="absolute bottom-0 left-0 h-full -ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-auto h-full opacity-100 object-stretch"
                                    viewBox="0 0 487 487"
                                >
                                    <path
                                        fill-opacity=".1"
                                        fill-rule="nonzero"
                                        fill="#FFF"
                                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                    ></path>
                                </svg>
                            </span>
                            <span class="absolute top-0 right-0 w-12 h-full -mr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="object-cover w-full h-full"
                                    viewBox="0 0 487 487"
                                >
                                    <path
                                        fill-opacity=".1"
                                        fill-rule="nonzero"
                                        fill="#FFF"
                                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                    ></path>
                                </svg>
                            </span>
                            <span
                                class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                            ></span>
                            <span class="relative text-base font-semibold">Summarize</span>
                        </button>
                    </div>
                </div>

                <div className='flex justify-start items-end flex-col gap-3 flex-1 w-full'>
                    <textarea
                        name="output"
                        id="output"
                        value={output}
                        readOnly
                        className="p-3 border-2 border-gray-300 rounded-2xl outline-purple-500 h-96 w-full resize-none"
                    />

                    <div className='flex justify-end w-full h-12'>
                        <MdOutlineContentCopy onClick={handleCopy} className='text-4xl hover:text-purple-500' />
                        <ToastContainer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Summarizer
