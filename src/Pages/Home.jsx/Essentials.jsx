import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Essentials = () => {
  const summer = [
    {
      image: 't-shirt.jpg',
      name: 'T-Shirt',
      offer: 'Min. 50% Off',
    },
    {
      image: 'shirt.jfif',
      name: 'Shirts',
      offer: 'Special Offer',
    },
    {
      image: 'vehicle.png',
      name: 'Wall Clock',
      offer: 'Min. 50% Off',
    },
    {
      image: 'kurta.jpg',
      name: 'Kurtas',
      offer: 'Min. 50% Off',
    },
  ];

  return (
    <div className="bg-white w-full max-w-lg ml-5 relative p-4 shadow-md rounded-lg">
      <div className="flex items-center justify-between pr-4">
        <h1 className="font-semibold text-2xl ml-4">Home Decoration</h1>
        <IoIosArrowForward
          size={20}
          className="bg-[#1F74BA] text-white p-1 rounded-full cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto p-4">
        {summer.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-lg text-center cursor-pointer hover:shadow-lg transition transform hover:scale-105"
            onClick={() => alert(`Clicked on ${item.name}`)}
          >
            <img
              className="h-[110px] w-auto mx-auto object-cover rounded-md"
              src={item.image}
              alt={item.name}
            />
            <p className="mt-2 text-lg text-black font-medium">{item.name}</p>
            <h3 className="font-semibold text-lg text-green-600">
              {item.offer}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essentials;
