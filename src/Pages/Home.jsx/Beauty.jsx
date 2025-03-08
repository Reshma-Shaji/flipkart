import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Beauty = () => {
  const beauty = [
    {
      image: 'beauty1.webp',
      name: 'Best Clenser',
      offer: 'Min. 20% Off',
    },
    { image: 'beauty2.png', name: 'Toners', offer: 'Special Offer' },
    {
      image: 'beauty3.jfif',
      name: 'Moiturizers',
      offer: 'Min. 20% Off',
    },
    { image: 'beauty4.jfif', name: 'Top Sunscreens', offer: 'Special Offer' },
  ];
  return (
    <div className="bg-white w-full max-w-lg ml-5 relative mt-5">
      <h1 className="font-semibold text-2xl ml-10">Home Decoration</h1>
      <IoIosArrowForward
        size={20}
        color="white"
        className="absolute right-7 -mt-5 bg-[#1F74BA] rounded-full"
      />

      <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-7 p-4 ">
        {beauty.map(item => {
          return (
            <div className=" border border-gray-300 py-5 w-[200px]">
              <img
                className="h-[110px] object-cover items-center ml-10"
                src={item.image}
                alt={item.name}
              />
              <p className="mt-2 ml-10 text-lg text-black">{item.name}</p>
              <h3 className="font-medium ml-10 text-lg text-green-600">
                {item.offer}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Beauty;
