import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const HomeDecor = () => {
  const home = [
    { image: 'chopper.png', name: 'Chopper', offer: 'Min. 50% Off' },
    { image: 'torch.png', name: 'Torch', offer: 'Special Offer' },
    { image: 'clock.webp', name: 'Wall Clock', offer: 'Min. 50% Off' },
    { image: 'flask.jfif', name: 'Flasks', offer: 'Special Offer' },
  ];

  return (
    <div className="bg-white w-full max-w-lg p-5 rounded-md shadow-md mx-auto mt-5">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Home Decoration</h1>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <IoIosArrowForward size={24} className="text-[#1F74BA]" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {home.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-md text-center shadow-sm hover:shadow-md transition-all hover:scale-105"
          >
            <img
              className="h-[110px] mx-auto object-contain"
              src={item.image}
              alt={item.name}
            />
            <p className="mt-2 text-lg font-medium">{item.name}</p>
            <h3 className="font-semibold text-green-600">{item.offer}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDecor;
