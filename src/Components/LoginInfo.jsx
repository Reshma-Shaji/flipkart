import React from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { HiOutlineGift } from 'react-icons/hi2';

const LoginInfo = () => {
  return (
    <div className="flex flex-col gap-5 py-2">
      <div className="">
        <h2 className="text-lg font-medium">
          New Customer?
          <span className="ml-16">
            <a href="">Sign Up</a>
          </span>
        </h2>
      </div>
      <hr className="bg-gray-300 border-none h-0.5" />
      <div className="flex gap-3">
        <MdOutlineAccountCircle size={17} />

        <h3>My Profile</h3>
      </div>
      <div className="flex gap-3">
        <img className="h-5" src="flip zon.png" alt="" />
        <h3>Flipkart Plus Zone</h3>
      </div>
      <div className="flex gap-3">
        <img className="h-5" src="order.png" alt="" />
        <h3>Orders</h3>
      </div>
      <div className="flex gap-3">
        <img className="h-5" src="wish.png" alt="" />
        <h3>Wishlist</h3>
      </div>
      <div className="flex gap-3">
        <HiOutlineGift size={17} />

        <h3>Rewards</h3>
      </div>
      <div className="flex gap-3">
        <img className="h-5" src="gitcard.png" alt="" />
        <h3>Gift Cards</h3>
      </div>
    </div>
  );
};

export default LoginInfo;
