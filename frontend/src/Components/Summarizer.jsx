import React, { useState } from 'react';
import { MdOutlineContentCopy } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { BACKEND_URL } from '../../constants/index';
import Loader from '../Components/Loader';
import axios from 'axios';

const Summarizer = () => {
    const [length, setLength] = useState('Short');
    const [tone, setTone] = useState('Professional');
    const [text, setText] = useState('');
    const [isSummarized, setIsSummarized] = useState(false);
    const [loading, setLoading] = useState(false);

    const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    };

    const formatBulletPoints = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '\n\n$1:')
            .replace(/^\s*[-*•]\s?/gm, '')
            .replace(/^(.*?):/gm, '🔹 $1:')
            .replace(/(?:\r\n|\r|\n){2,}/g, '\n\n')
            .trim();
    };

    const handleSummarize = async () => {
        if (!text.trim()) {
            toast.warn("Please enter some text to summarize.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${BACKEND_URL}/api/summarize`, { length, tone, inputText: text }, config);
            let summary = response.data.summary;

            if (tone.toLowerCase() === "bullet points") {
                summary = formatBulletPoints(summary);
            }
            setText(summary);
            setIsSummarized(true);
        } catch (error) {
            console.error("Summarization failed:", error);
            toast.error("Failed to summarize. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleAgain = () => {
        setText('');
        setIsSummarized(false);
    };

    const handleCopy = () => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        toast.success('Text Copied!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Zoom,
        });
    };

    return (
        <div className='lg:px-18 md:px-10 px-4 font-sans'>
            {/* --- Combined Options Bar for Length and Tone --- */}
            <div className='flex items-center justify-center w-full mt-10'>
                <div className='bg-white rounded-ful flex items-center justify-between flex-wrap gap-2 md:gap-4 md:w-3/4 w-full'>
                    {/* Length Selection - A modern pill-based design */}
                    <div className="flex items-center rounded-full flex-wrap bg-gray-100 p-1">
                        <label className="text-sm md:text-base text-gray-700 font-semibold px-2">Length:</label>
                        {['Short', 'Medium', 'Detailed'].map((len) => (
                            <button
                                key={len}
                                onClick={() => setLength(len)}
                                className={`px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full transition-all duration-300 ease-in-out font-medium
                                    ${length === len ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}
                                `}
                            >
                                {len}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center flex-wrap rounded-full bg-gray-100 p-1">
                        <label className="text-sm md:text-base text-gray-700 font-semibold px-2">Tone:</label>
                        {['Professional', 'Simple', 'Academic', 'Points'].map((ton) => (
                            <button
                                key={ton}
                                onClick={() => setTone(ton)}
                                className={`px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full transition-all duration-300 ease-in-out font-medium
                                    ${tone === ton ? 'bg-purple-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}
                                `}
                            >
                                {ton}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Single Textarea and Action Buttons --- */}
            <div className='flex justify-center items-center mt-8'>
                <div className='flex justify-center items-end flex-col gap-5 md:w-3/4 w-full'>
                    {/* Textarea Container */}
                    <div className='relative w-full'>
                        <textarea
                            name="text"
                            id="text"
                            placeholder='Paste your text and press "Summarize"'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            readOnly={isSummarized || loading}
                            className={`p-5 border-2 hover:border-purple-400 border-gray-200 rounded-2xl text-justify outline-none shadow-sm h-96 w-full resize-none font-light text-gray-800 transition-all duration-300
                                ${isSummarized ? 'bg-gray-50' : 'bg-white'}
                            `}
                        />
                        {loading && (
                            <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-2xl z-10'>
                                <Loader />
                            </div>
                        )}
                    </div>

                    {/* Action Buttons Container */}
                    <div className='flex justify-end items-center gap-4 w-full h-12'>
                        <ToastContainer />
                        {!loading && (
                            isSummarized ? (
                                <>
                                    <button
                                        onClick={handleAgain}
                                        className='inline-flex items-center justify-center p-3 rounded-full text-gray-700 bg-gray-100 hover:bg-purple-300 transition-colors duration-300 shadow-sm transform hover:scale-110'
                                    >
                                        <GrUpdate className='text-2xl' />
                                    </button>
                                    <button
                                        onClick={handleCopy}
                                        className='inline-flex items-center justify-center p-3 rounded-full text-gray-700 bg-gray-100 hover:bg-purple-300 transition-colors duration-300 shadow-sm transform hover:scale-110'
                                    >
                                        <MdOutlineContentCopy className='text-2xl' />
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={handleSummarize}
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
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summarizer;