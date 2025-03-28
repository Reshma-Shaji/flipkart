import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch, CiShop } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineMoreVert, MdMenu, MdClose } from 'react-icons/md';
import Tippy from '@tippyjs/react';

import MoreInfo from './MoreInfo';
import LoginInfo from './LoginInfo';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 w-full z-50 bg-[#1F74BA] shadow-md">
      <div className="flex justify-between items-center font-sans h-20 px-4 md:px-10">
        <div className="flex items-center">
          <img className="h-10" src="flip.png" alt="Logo" />
        </div>

        <div className="relative w-full max-w-xl hidden sm:block">
          <input
            className="w-full bg-white text-lg rounded-lg pl-10 pr-4 py-2 outline-none"
            type="text"
            placeholder="Search for Product, Brand, and More"
          />
          <CiSearch
            size={25}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Tippy theme="light" content={<LoginInfo />} interactive={true}>
            <button className="bg-white text-[#1F74BA] py-2 px-7 rounded-md hover:shadow-lg">
              Login
            </button>
          </Tippy>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/cart')}
          >
            <IoCartOutline color="white" size={28} />
            <span className="hidden md:block text-white">Cart</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <CiShop color="white" size={28} />
            <span className="hidden md:block text-white">Become a Seller</span>
          </div>

          <Tippy theme="light" content={<MoreInfo />} interactive={true}>
            <span>
              <MdOutlineMoreVert
                color="white"
                size={24}
                className="cursor-pointer"
              />
            </span>
          </Tippy>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <MdClose size={28} color="white" />
            ) : (
              <MdMenu size={28} color="white" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1F74BA] text-white flex flex-col items-center py-4 gap-4">
          <Tippy theme="light" content={<LoginInfo />} interactive={true}>
            <button className="bg-white text-[#1F74BA] py-2 px-7 rounded-md hover:shadow-lg">
              Login
            </button>
          </Tippy>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/cart')}
          >
            <IoCartOutline size={28} />
            <span>Cart</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <CiShop size={28} />
            <span>Become a Seller</span>
          </div>

          <Tippy theme="light" content={<MoreInfo />} interactive={true}>
            <span>
              <MdOutlineMoreVert size={24} className="cursor-pointer" />
            </span>
          </Tippy>
        </div>
      )}
    </div>
  );
};

export default Navbar;
