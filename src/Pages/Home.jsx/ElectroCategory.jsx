import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

const ElectroCategory = () => {
  const navigate = useNavigate();
  const electronics = [
    {
      id: 1,
      image: 'electro1.jfif',
      name: 'Best Wireless Headset',
      price: 'Grab Now',
    },
    {
      id: 2,
      image: 'electro3.jpg',
      name: 'Fastrack Smartwatch',
      price: 'From ₹1,399',
    },
    {
      id: 3,
      image: 'electro2.png',
      name: 'Sandisk Extreme Portable',
      price: 'From ₹5,799',
    },
    {
      id: 4,
      image: 'electro4.jfif',
      name: 'Projector',
      price: 'From ₹4,599',
    },
    {
      id: 5,
      image: 'electro5.png',
      name: 'Best Printer',
      price: 'From ₹6,599',
    },
    {
      id: 6,
      image: 'electro6.jfif',
      name: 'ASUS Monitors',
      price: 'From ₹8,799',
    },
    {
      id: 7,
      image: 'electro7.webp',
      name: 'Shavers',
      price: 'From ₹399',
    },
    {
      id: 8,
      image: 'electro8.webp',
      name: 'Monitors',
      price: 'From ₹5,999',
    },
    {
      id: 9,
      image: 'electro9.webp',
      name: 'Printers',
      price: 'From ₹20,599',
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 4 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 2 },
  };

  return (
    <div className="bg-white p-5 mx-7 mt-5 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Best of Electronics</h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass="carousel-container"
      >
        {electronics.map(item => (
          <div
            key={item.id}
            className="text-center p-2 cursor-pointer transition transform hover:scale-105"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img
              className="h-[160px] w-auto mx-auto object-cover rounded-lg"
              src={item.image}
              alt={item.name}
            />
            <p className="text-gray-600 mt-2 text-sm sm:text-base font-medium">
              {item.name}
            </p>
            <h3 className="font-semibold text-md sm:text-lg">{item.price}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ElectroCategory;
