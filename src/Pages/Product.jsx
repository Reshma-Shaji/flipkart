import React from 'react';
import { useState } from 'react';
import Navbar from '../Components/Navbar';

const Product = () => {
  const electronics = [
    {
      id: 1,
      image: 'electro1.jfif',
      name: 'Best Wireless Headset',
      price: 'Grab Now',
      dis: 'Experience crystal-clear sound with our top-rated wireless headset.',
    },
    {
      id: 2,
      image: 'electro3.jpg',
      name: 'Fastrack Smartwatch',
      price: 'From ₹1,399',
      dis: 'Stay ahead with the latest Fastrack smartwatch packed with smart features.',
    },
    {
      id: 3,
      image: 'electro2.png',
      name: 'Sandisk Extreme Portable',
      price: 'From ₹5,799',
      dis: 'High-speed portable SSD for effortless data transfer and storage.',
    },
    {
      id: 4,
      image: 'electro4.jfif',
      name: 'Projector',
      price: 'From ₹4,599',
      dis: 'Bring the cinema home with this high-definition projector.',
    },
    {
      id: 5,
      image: 'electro5.png',
      name: 'Best Printer',
      price: 'From ₹6,599',
      dis: 'Fast and efficient printer for all your home and office needs.',
    },
    {
      id: 6,
      image: 'electro6.jfif',
      name: 'ASUS Monitors',
      price: 'From ₹8,799',
      dis: 'Ultra-clear display with advanced eye-care technology.',
    },
    {
      id: 7,
      image: 'electro7.webp',
      name: 'Shavers',
      price: 'From ₹399',
      dis: 'Get the smoothest shave with our premium shaver collection.',
    },
    {
      id: 8,
      image: 'electro8.webp',
      name: 'Monitors',
      price: 'From ₹5,999',
      dis: 'Enhance productivity with high-resolution monitors.',
    },
    {
      id: 9,
      image: 'electro9.webp',
      name: 'Printers',
      price: 'From ₹20,599',
      dis: 'Professional-grade printers with wireless connectivity.',
    },
    {
      id: 10,
      image: 'electro10.jpg',
      name: 'Wireless Headphones',
      price: 'From ₹12,599',
      dis: 'Immersive audio experience with noise cancellation.',
    },
    {
      id: 11,
      image: 'electro11.jpg',
      name: 'Best Projector',
      price: 'From ₹12,599',
      dis: '4K projector with high brightness and smart features.',
    },
    {
      id: 12,
      image: 'electro12.jpeg',
      name: 'Keyboards',
      price: 'From ₹12,599',
      dis: 'Ergonomic keyboards designed for effortless typing.',
    },
  ];

  const addToCart = product => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Best of Electronics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {electronics.map(item => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                className="h-40 w-full object-cover rounded-md"
                src={item.image}
                alt={item.name}
              />
              <h3 className="text-lg font-semibold text-gray-900 mt-3">
                {item.name}
              </h3>
              <p className="text-blue-500 font-semibold mt-1">₹{item.price}</p>
              <div className="flex gap-2">
                <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300 mt-4">
                  Buy Now
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
