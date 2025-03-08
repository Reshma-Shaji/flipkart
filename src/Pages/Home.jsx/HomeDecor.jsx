import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const HomeDecor = () => {
  const home = [
    {
      image: 'chopper.png',
      name: 'Chopper',
      offer: 'Min. 50% Off',
    },
    { image: 'torch.png', name: 'Torch', offer: 'Special Offer' },
    {
      image: 'clock.webp',
      name: 'Wall Clock',
      offer: 'Min. 50% Off',
    },
    { image: 'flask.jfif', name: 'Flasks', offer: 'Special Offer' },
  ];
  return (
    <div className="bg-white w-full max-w-lg ml-5 relative">
      <h1 className="font-semibold text-2xl ml-10">Home Decoration</h1>
      <IoIosArrowForward
        size={20}
        color="white"
        className="absolute right-7 -mt-5 bg-[#1F74BA] rounded-full"
      />

      <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-7 p-4 ">
        {home.map(item => {
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

export default HomeDecor;
