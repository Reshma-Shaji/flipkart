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
      name: 'Fastrack Smartwatch',
      price: 'From ₹1,399',
    },
    {
      image: 'electro2.png',
      name: 'Sandisk Extreme Portable',
      price: 'From ₹5,799',
    },
    { image: 'electro4.jfif', name: 'Projector', price: 'From ₹4,599' },
    { image: 'electro5.png', name: 'Best Printer', price: 'From ₹6,599' },
    { image: 'electro6.jfif', name: 'ASUS Monitors', price: 'From ₹8,799' },
    { image: 'electro7.webp', name: 'Shavers', price: 'From ₹399' },
    { image: 'electro8.webp', name: 'Monitors', price: 'From ₹5,999' },
    { image: 'electro9.webp', name: 'Printers', price: 'From ₹20,599' },
    {
      image: 'electro10.jpg',
      name: 'Wireless Headphones',
      price: 'From ₹12,599',
    },
    { image: 'electro11.jpg', name: 'Best Projector', price: 'From ₹12,599' },
    { image: 'electro12.jpeg', name: 'Keyboards', price: 'From ₹12,599' },
    { image: 'electro13.png', name: 'Laptops', price: 'From ₹12,599' },
    { image: 'electro14.webp', name: 'Android Phones', price: 'From ₹12,599' },
    { image: 'electro15.avif', name: 'Best Tablets', price: 'From ₹12,599' },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 4 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
  };

  return (
    <div className="bg-white p-5 mx-5 md:mx-10 mt-5 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Best Deals on Smartphones</h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {phones.map((item, index) => (
          <div
            key={index}
            className="text-center p-2 hover:scale-105 transition-transform"
          >
            <img
              className="h-[130px] md:h-[150px] lg:h-[180px] w-auto mx-auto object-cover"
              src={item.image}
              alt={item.name}
            />
            <p className="text-gray-600 mt-2 text-sm md:text-base truncate">
              {item.name}
            </p>
            <h3 className="font-medium text-green-600">{item.price}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BestSmartphone;
