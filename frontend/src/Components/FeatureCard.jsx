import React from 'react'

const FeatureCard = ({ data }) => {
    return (
        <div class="flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 hover:border-purple-500 rounded-xl p-2">
            <div class="p-3 text-center">
                <div class="flex justify-center mb-4">
                    <img src={data.imgsrc} alt="image" class="w-12 h-12" />
                </div>
                <div class="flex justify-center mb-2">
                    <h5 class="text-slate-800 text-2xl font-semibold">
                        {data.heading}
                    </h5>
                </div>
                <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard
