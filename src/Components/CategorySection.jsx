import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdOutlineExpandMore } from 'react-icons/md';
import Fashion from './Fashion';

const CategorySection = () => {
  return (
    <div className="bg-white h-32 mt-20 ml-7 mr-7 py-5">
      <div className="flex justify-center items-center gap-10">
        <div>
          <img src="kilos.png" alt="Kilos" />
          <h3 className="font-semibold text-center">Kilos</h3>
        </div>
        <div>
          <img className="ml-3" src="mobile.png" alt="Mobiles" />
          <h3 className="font-semibold text-center">Mobiles</h3>
        </div>
        <div>
          <img src="fashion.png" alt="Fashion" />
          <div className="flex items-center">
            <h3 className="font-semibold text-center mr-1 hover:text-[#1F74BA]">
              Fashion
            </h3>
            <Tippy
              content={<Fashion />}
              theme="light"
              interactive={true}
              placement="bottom"
            >
              <span className="cursor-pointer">
                <MdOutlineExpandMore />
              </span>
            </Tippy>
          </div>
        </div>
        <div>
          <img className="ml-5" src="electronics.png" alt="Electronics" />
          <h3 className="font-semibold text-center">Electronics</h3>
        </div>
        <div>
          <img className="ml-5" src="home&fur.png.jpg" alt="Home & Furniture" />
          <h3 className="font-semibold text-center">Home & Furniture</h3>
        </div>
        <div>
          <img className="ml-5" src="appliance.png" alt="Appliances" />
          <h3 className="font-semibold text-center">Appliances</h3>
        </div>
        <div>
          <img className="ml-5" src="flightbook.png" alt="Flight Bookings" />
          <h3 className="font-semibold text-center">Flight Bookings</h3>
        </div>
        <div>
          <img className="ml-5" src="beauty-toy.png" alt="Beauty, Toy & More" />
          <h3 className="font-semibold text-center">Beauty, Toy & More</h3>
        </div>
        <div>
          <img className="ml-5" src="2wheelers.png" alt="Two Wheelers" />
          <h3 className="font-semibold text-center">Two Wheelers</h3>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
