import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const BestSmartphone = () => {
  const phones = [
    {
      image: 'electro1.jfif',
      name: 'Best Wireless Headset',
      price: 'Grab Now',
    },
    {
      image: 'electro3.jpg',
      name: 'Fastrack smartwatch',
      price: 'From ₹1,399',
    },
    {
      image: 'electro2.png',
      name: 'Sandisk Extreme Portable',
      price: 'From ₹5,799',
    },
    {
      image: 'electro4.jfif',
      name: 'Projector',
      price: 'from ₹4599',
    },
    {
      image: 'electro.5.png',
      name: 'Best Printer',
      price: 'From ₹6,599',
    },
    {
      image: 'electro6.jfif',
      name: 'ASUS monitors',
      price: 'From ₹8,799',
    },
    {
      image: 'electro7.webp',
      name: 'Shavers',
      price: 'from ₹3,99',
    },
    {
      image: 'electro8.webp',
      name: 'Monitors',
      price: 'from ₹5,999',
    },
    {
      image: 'electro9.webp',
      name: 'Printers',
      price: 'from ₹20,599',
    },
    {
      image: 'electro10.jpg',
      name: 'Wireless Headphones',
      price: 'from ₹12,599',
    },
    {
      image: 'electro11.jpg',
      name: 'Best Projector',
      price: 'from ₹12,599',
    },
    {
      image: 'electro12.jpeg',
      name: 'KeyBoards',
      price: 'from ₹12,599',
    },
    {
      image: 'electro13.png',
      name: 'Laptops',
      price: 'from ₹12,599',
    },
    {
      image: 'electro14.webp',
      name: 'Android Phones',
      price: 'from ₹12,599',
    },
    {
      image: 'electro15.avif',
      name: 'Best Tablets',
      price: 'from ₹12,599',
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
      <h1 className="text-2xl font-semibold mb-4">Best Deals on Smartphones</h1>
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
        {phones.map((item, index) => (
          <div key={index} className="text-center p-2">
            <img
              className="h-[130px] w-auto mx-auto object-cover"
              src={item.image}
              alt={item.name}
            />
            <p className="text-gray-600  mt-2">{item.name}</p>
            <h3 className="font-medium">{item.price}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BestSmartphone;
