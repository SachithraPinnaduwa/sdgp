import React from 'react';

const Quotes = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap p-10  text-justify">
      <div className="w-full lg:w-1/2">
        <img src="/main/image6.jpg" alt="Left Side Image"  width={400} height={400} className="w-full lg:w-auto h-auto rounded-lg" />
      </div>
      <div className="w-full lg:w-1/2 text-white p-4">
        <div className="p-4">
          <h2 className="sm:text-5xl text-4xl text-justify-center font-serif ">"Tourists don't know where they've been, travelers don't know where they're going." </h2><br/>
          <p className=" text-lg  ">Paul Theroux<br/>American novelist and travel writer</p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;