import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SmartPicks = () => {
  const smart = [
    { image: 'smart1.png', name: 'Smart Cameras', price: 'Grab Now' },
    { image: 'smart2.png', name: 'Holders are here', price: 'From ₹2,499' },
    { image: 'smart3.webp', name: 'Boat Power Bank', price: 'From ₹999' },
    { image: 'smart4.webp', name: 'Premium Smart Watch', price: 'from ₹8,999' },
    { image: 'smart5.png', name: 'Plain Cases & Covers', price: 'From ₹149' },
    { image: 'smart6.webp', name: 'CMF Smartwatches', price: 'From ₹3,290' },
    { image: 'smart7.webp', name: 'Top Smartwatches', price: 'from ₹799' },
    { image: 'smart8.webp', name: 'Top Watches', price: 'from ₹1,999' },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 3 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 2 },
  };

  return (
    <div className="bg-white p-5 mx-7 mt-5 shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Smart Picks for You</h1>
      <Carousel
        responsive={responsive}
        swipeable
        autoPlaySpeed={4000}
        keyBoardControl
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass="carousel-container"
      >
        {smart.map((item, index) => (
          <div key={index} className="text-center p-3">
            <img
              className="w-full h-[130px] mx-auto object-cover rounded-md"
              src={item.image}
              alt={item.name}
            />
            <p className="text-gray-600 mt-2">{item.name}</p>
            <h3 className="font-medium text-blue-700">{item.price}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SmartPicks;
