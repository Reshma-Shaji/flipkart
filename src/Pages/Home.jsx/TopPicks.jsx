import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const TopPicks = () => {
  const picks = [
    {
      image: 'dryfruit.jfif',
      name: 'Dry Fruit, Nut & Seed',
      offer: 'Min. 50% Off',
    },
    { image: 'saree.webp', name: 'Women Sarees', offer: 'Min. 50% Off' },
    {
      image: 'meterial.jfif',
      name: 'Women Dress Material',
      offer: 'Min. 50% Off',
    },
    { image: 'gown.png', name: 'Women Gowns', offer: 'Special Offer' },
  ];

  return (
    <div className="bg-white w-full max-w-lg mx-auto p-4 relative shadow-md rounded-lg">
      <h1 className="font-semibold text-2xl text-center">Season's Top Picks</h1>
      <IoIosArrowForward
        size={24}
        color="white"
        className="absolute right-5 top-5 bg-[#1F74BA] rounded-full p-1"
      />

      <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto p-4">
        {picks.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-3 w-full text-center rounded-lg"
          >
            <img
              className="h-[110px] w-auto mx-auto object-cover"
              src={item.image}
              alt={item.name}
            />
            <p className="mt-2 text-lg font-medium text-black">{item.name}</p>
            <h3 className="text-lg font-semibold text-green-600">
              {item.offer}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
