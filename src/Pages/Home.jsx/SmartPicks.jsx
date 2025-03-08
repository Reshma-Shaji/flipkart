import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const SmartPicks = () => {
  const smart = [
    {
      image: 'smart1.png',
      name: 'Smart Cameras',
      price: 'Grab Now',
    },
    {
      image: 'smart2.png',
      name: 'Holders are here',
      price: 'From ₹2,499',
    },
    {
      image: 'smart3.webp',
      name: 'Boat Power Bank',
      price: 'From ₹999',
    },
    {
      image: 'smart4.webp',
      name: 'Premium Smart Watch',
      price: 'from ₹8,999',
    },
    {
      image: 'smart5.png',
      name: 'Plain Cases & Covers',
      price: 'From ₹149',
    },
    {
      image: 'smart6.webp',
      name: 'CMF Smartwatches',
      price: 'From ₹3,290',
    },
    {
      image: 'smart7.webp',
      name: 'Top Smartwatches',
      price: 'from ₹799',
    },
    {
      image: 'smart8.webp',
      name: 'Top Watches',
      price: 'from ₹1,999',
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="bg-white p-5 mx-7 mt-5 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Top Furniture Deals</h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {smart.map((item, index) => (
          <div key={index} className="text-center p-2">
            <img
              className="h-[130px] w-auto mx-auto object-cover"
              src={item.image}
              alt={item.name}
            />

            <p className="text-gray-600 mt-2">{item.name}</p>
            <h3 className=" font-medium">{item.price}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SmartPicks;
