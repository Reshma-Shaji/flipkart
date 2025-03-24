import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdOutlineExpandMore } from 'react-icons/md';
import Fashion from './Fashion';

const categories = [
  { name: 'Kilos', image: 'kilos.png' },
  { name: 'Mobiles', image: 'mobile.png' },
  { name: 'Fashion', image: 'fashion.png', hasDropdown: true },
  { name: 'Electronics', image: 'electronics.png' },
  { name: 'Home & Furniture', image: 'home&fur.png.jpg' },
  { name: 'Appliances', image: 'appliance.png' },
  { name: 'Flight Bookings', image: 'flightbook.png' },
  { name: 'Beauty, Toy & More', image: 'beauty-toy.png' },
  { name: 'Two Wheelers', image: '2wheelers.png' },
];

const CategorySection = () => {
  return (
    <div className="bg-white py-5 mt-10 mx-7 shadow-md rounded-lg">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 object-contain"
            />
            {category.hasDropdown ? (
              <div className="flex items-center group">
                <h3 className="font-semibold text-center hover:text-blue-600">
                  {category.name}
                </h3>
                <Tippy
                  content={<Fashion />}
                  theme="light"
                  interactive={true}
                  placement="bottom"
                >
                  <span className="cursor-pointer">
                    <MdOutlineExpandMore className="group-hover:text-blue-600" />
                  </span>
                </Tippy>
              </div>
            ) : (
              <h3 className="font-semibold text-center">{category.name}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
