import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialYoutube } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-[#302f2f] grid grid-cols-6 gap-8 p-10 h-[350px] relative">
        <div className="text-white">
          <h1 className="text-gray-400 text-sm">ABOUT</h1>
          <a href="">
            <p>Contact Us</p>
          </a>
          <a href="">
            <p>About Us</p>
          </a>
          <a href="">
            <p>Careers</p>
          </a>
          <a href="">
            <p>Flipkart Stories</p>
          </a>
          <a href="">
            <p>Press</p>
          </a>
          <a href="">
            <p>Corporate Information</p>
          </a>
        </div>
        <div className="text-white">
          <h1 className="text-gray-400 text-sm">GROUP COMPANIES</h1>
          <a href="">
            <p>Myntra</p>
          </a>
          <a href="">
            <p>Cleartrip</p>
          </a>
          <a href="">
            <p>Shopsy</p>
          </a>
        </div>
        <div className="text-white">
          <h1 className="text-gray-400 text-sm">HELP</h1>
          <a href="">
            <p>Payments</p>
          </a>
          <a href="">
            <p>Shipping</p>
          </a>
          <a href="">
            <p>Cancellation & Returns</p>
          </a>
          <a href="">
            <p>FAQ</p>
          </a>
        </div>
        <div className="text-white">
          <h1 className="text-gray-400 text-sm">CONSUMER POLICY</h1>
          <a href="">
            <p>Cancellation & Returns</p>
          </a>
          <a href="">
            <p>Terms Of Use</p>
          </a>
          <a href="">
            <p>Security</p>
          </a>
          <a href="">
            <p>Privacy</p>
          </a>
          <a href="">
            <p>Sitemap</p>
          </a>
          <a href="">
            <p>Grievance Redressal</p>
          </a>
          <a href="">
            <p>EPR Compliance</p>
          </a>
        </div>
        <div className="text-white">
          <h1 className="text-gray-400 text-sm">Mail Us:</h1>
          <p>
            Flipkart internet Private Limited,
            <br />
            Building Alyssa, Begonia & <br />
            Clove embassy Tech Village,
            <br />
            Outer Ring Road, Devarabeesanahallil Village,
            <br />
            Bengaluru, 560103, <br />
            Karnataka, India
          </p>
          <div className="text-white mt-3">
            <h1 className="text-gray-400 text-sm">Social:</h1>
            <div className="flex mt-3 gap-5">
              <CiFacebook size={22} />
              <FaXTwitter size={22} />
              <SlSocialYoutube size={22} />
              <FaInstagram size={22} />
            </div>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-gray-400 text-sm">Registered Office Address:</h1>
          <p>
            Flipkart internet Private Limited,
            <br />
            Building Alyssa, Begonia & <br />
            Clove embassy Tech Village,
            <br />
            Outer Ring Road, Devarabeesanahallil Village,
            <br />
            Bengaluru, 560103, <br />
            Karnataka, India <br />
            CIN : U75965123GD547475 <br />
            Telephone: 044-6456245/044-527357
          </p>
        </div>
        <div className="absolute bottom-3 flex text-white gap-28">
          <p>Become a seller</p>
          <p>Advertise</p>
          <p>Git Cards</p>
          <p>Help Center</p>
          <p>2007-2025 Flipkart.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
