import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialYoutube } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#302f2f] text-white p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <div>
          <h1 className="text-gray-400 text-sm mb-2">ABOUT</h1>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Press</p>
          <p>Corporate Information</p>
        </div>

        <div>
          <h1 className="text-gray-400 text-sm mb-2">GROUP COMPANIES</h1>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>

        <div>
          <h1 className="text-gray-400 text-sm mb-2">HELP</h1>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        <div>
          <h1 className="text-gray-400 text-sm mb-2">CONSUMER POLICY</h1>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
          <p>EPR Compliance</p>
        </div>

        <div>
          <h1 className="text-gray-400 text-sm mb-2">Mail Us:</h1>
          <p className="leading-relaxed">
            Flipkart Internet Pvt Ltd, <br />
            Building Alyssa, Begonia & Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabeesanahalli, <br />
            Bengaluru, 560103, Karnataka, India
          </p>

          <h1 className="text-gray-400 text-sm mt-4">Follow Us:</h1>
          <div className="flex mt-3 gap-6">
            <CiFacebook size={24} />
            <FaXTwitter size={24} />
            <SlSocialYoutube size={24} />
            <FaInstagram size={24} />
          </div>
        </div>

        <div>
          <h1 className="text-gray-400 text-sm mb-2">Registered Office:</h1>
          <p className="leading-relaxed">
            Flipkart Internet Pvt Ltd, <br />
            Building Alyssa, Begonia & Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabeesanahalli, <br />
            Bengaluru, 560103, Karnataka, India <br />
            CIN: U75965123GD547475 <br />
            Telephone: 044-6456245 / 044-527357
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center text-center mt-10 gap-5 border-t border-gray-600 pt-4">
        <p>Become a Seller</p>
        <p>Advertise</p>
        <p>Gift Cards</p>
        <p>Help Center</p>
        <p>© 2007-2025 Flipkart.com</p>
      </div>
    </div>
  );
};

export default Footer;
