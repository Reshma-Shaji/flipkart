import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Beauty = () => {
  const beauty = [
    { image: 'beauty1.webp', name: 'Best Cleanser', offer: 'Min. 20% Off' },
    { image: 'beauty2.png', name: 'Toners', offer: 'Special Offer' },
    { image: 'beauty3.jfif', name: 'Moisturizers', offer: 'Min. 20% Off' },
    { image: 'beauty4.jfif', name: 'Top Sunscreens', offer: 'Special Offer' },
  ];

  return (
    <div className="bg-white w-full max-w-4xl mx-auto relative mt-5 p-5 shadow-md rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Beauty & Skincare</h1>
        <IoIosArrowForward
          size={24}
          className="bg-[#1F74BA] text-white rounded-full p-1 cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mt-4">
        {beauty.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-md text-center"
          >
            <img
              className="h-[110px] object-cover mx-auto"
              src={item.image}
              alt={item.name}
            />
            <p className="mt-2 text-lg font-medium">{item.name}</p>
            <h3 className="text-lg font-semibold text-green-600">
              {item.offer}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beauty;
