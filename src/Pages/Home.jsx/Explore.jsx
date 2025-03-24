import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Explore = () => {
  return (
    <div className="bg-[#e3e1e1] h-auto max-w-4xl w-full mx-auto p-6 mt-5 rounded-lg shadow-lg text-center">
      <img className="h-[100px] mx-auto" src="flip-ex.png" alt="Brand Logo" />
      <h1 className="text-3xl sm:text-4xl font-bold mt-3">
        Top Selling Beauty Products
      </h1>
      <p className="text-gray-500 text-lg sm:text-2xl mt-2">
        Latest Brands and Products
      </p>

      <img
        className="mx-auto py-10 w-full max-w-lg"
        src="/explor.png"
        alt="Explore"
      />

      <div className="flex justify-center">
        <button className="flex items-center text-xl font-medium bg-white py-3 px-5 rounded-md shadow-md hover:bg-gray-200 transition-all">
          Explore More
          <IoIosArrowForward size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Explore;
