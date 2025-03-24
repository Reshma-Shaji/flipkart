import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FurnitureDeal = () => {
  const furniture = [
    {
      image: 'fur1.jfif',
      name: 'Best Wireless Headset',
      price: 'Grab Now',
    },
    { image: 'fur2.png', name: 'Office Chair', price: 'From ₹2,499' },
    { image: 'fur3.webp', name: 'Bean Bag', price: 'From ₹999' },
    { image: 'fur4.webp', name: 'Recliner', price: 'From ₹8,999' },
    { image: 'fur5.png', name: 'TV Units', price: 'From ₹6,599' },
    { image: 'fur6.png', name: 'Wardrobe', price: 'From ₹6,790' },
    { image: 'fur7.jfif', name: 'Furniture', price: 'From ₹3,999' },
    { image: 'fur8.jfif', name: 'Sofa Beds', price: 'From ₹5,999' },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <div className="bg-white p-5 mx-7 mt-5 shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Top Furniture Deals
      </h1>
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
        {furniture.map((item, index) => (
          <div key={index} className="text-center p-2">
            <img
              className="h-[130px] w-auto mx-auto object-cover rounded-md shadow-md"
              src={item.image}
              alt={item.name}
            />
            <p className="text-gray-600 mt-2 font-medium">{item.name}</p>
            <h3 className="font-semibold text-blue-600">{item.price}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FurnitureDeal;
