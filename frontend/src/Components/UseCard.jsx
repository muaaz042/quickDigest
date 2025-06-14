import React from 'react';

const UseCard = ({data}) => {
  return (
    <div className="max-w-xl border-2 border-purple-500 text-center bg-white p-6 pb-7 rounded-xl overflow-hidden flex flex-col justify-center items-center gap-4">
      <div className="h-16 w-16 border-2 text-3xl font-bold text-white bg-purple-500 flex justify-center items-center rounded-xl">
        {data.step}
      </div>
      <h1 className="text-slate-800 text-2xl font-semibold">
        {data.heading}
      </h1>
      <div className="text-gray-700 leading-[1.5em] text-[1em]">
        {data.desc}
      </div>
    </div>
  );
};

export default UseCard;
