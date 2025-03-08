import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Explore = () => {
  return (
    <div className="bg-[#e3e1e1] h-[500px] w-[60%] relative mt-5">
      <img className="h-[100px]" src="flip ex.png" alt="" />
      <h1 className="text-4xl font-bold text-center">
        Top Selling Beaty Products
      </h1>

      <p className="text-gray-500 font-normal text-2xl text-center ">
        Latest Brands and prodcts
      </p>
      <img className="mx-auto py-10 relative" src="explor.png" alt="" />
      <div>
        <button className=" flex absolute bottom-10 right-16 text-xl font-medium bg-white py-3 px-3 mr-20 gap-2 shadow rounded-sm">
          Explore More
          <IoIosArrowForward size={20} className="mt-2" />
        </button>
      </div>
    </div>
  );
};

export default Explore;
