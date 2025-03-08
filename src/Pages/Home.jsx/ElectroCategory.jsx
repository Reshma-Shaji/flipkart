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
      name: 'Fastrack smartwatch',
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
      price: 'from ₹4599',
    },
    {
      id: 5,
      image: 'electro.5.png',
      name: 'Best Printer',
      price: 'From ₹6,599',
    },
    {
      id: 6,
      image: 'electro6.jfif',
      name: 'ASUS monitors',
      price: 'From ₹8,799',
    },
    {
      id: 7,
      image: 'electro7.webp',
      name: 'Shavers',
      price: 'from ₹3,99',
    },
    {
      id: 8,
      image: 'electro8.webp',
      name: 'Monitors',
      price: 'from ₹5,999',
    },
    {
      id: 9,
      image: 'electro9.webp',
      name: 'Printers',
      price: 'from ₹20,599',
    },
    {
      id: 10,
      image: 'electro10.jpg',
      name: 'Wireless Headphones',
      price: 'from ₹12,599',
    },
    {
      id: 11,
      image: 'electro11.jpg',
      name: 'Best Projector',
      price: 'from ₹12,599',
    },
    {
      id: 12,
      image: 'electro12.jpeg',
      name: 'KeyBoards',
      price: 'from ₹12,599',
    },
    {
      id: 13,
      image: 'electro13.png',
      name: 'Laptops',
      price: 'from ₹12,599',
    },
    {
      id: 14,
      image: 'electro14.webp',
      name: 'Android Phones',
      price: 'from ₹12,599',
    },
    {
      id: 15,
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
      <h1 className="text-2xl font-semibold mb-4">Best of Electronics</h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass="carousel-container"
      >
        {electronics.map(item => (
          <div
            key={item.id}
            className="text-center p-2 cursor-pointer"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img
              className="h-[130px] w-auto mx-auto object-cover"
              src={item.image}
              alt={item.name}
            />
            <p className="text-gray-600 mt-2">{item.name}</p>
            <h3 className="font-medium">{item.price}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ElectroCategory;
