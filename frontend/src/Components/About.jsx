import React from 'react'
import FeatureCard from './FeatureCard'
import { features } from '../Assets/data'

const About = () => {
    return (
        <div id='about' className='flex flex-col my-14 gap-16'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-center md:text-6xl sm:text-4xl text-3xl font-semibold text-gray-700'>Free AI Text Summarizer</h1>
                <p className='text-center w-2/3'>QuickDigest Summarizer can condense articles, reports, or documents down to the key points instantly. Our AI uses natural language processing to locate critical information while maintaining the original context.</p>
            </div>


            <section className={`flex flex-col justify-center items-center gap-16 md:px-24 px-7 md:py-20 py-10 `}>
                <h1 className='md:text-8xl text-5xl text-gray-700'>Feature</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-28 lg:gap-y-16 gap-x-12 gap-y-14'>
                    {
                        features.map((data, i) => (<FeatureCard key={i} data={data} />))
                    }
                </div>
            </section>
        </div>
    )
}

export default About
