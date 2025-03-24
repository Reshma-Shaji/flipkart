import React from 'react';

const Offer = () => {
  const images = [
    'offer1.webp',
    'offer2.webp',
    'offer3.webp',
    'offer4.webp',
    'offer5.webp',
    'offer6.webp',
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Offer ${index + 1}`}
          className="w-full h-auto rounded-md shadow-md hover:shadow-lg transition-all duration-300 object-cover"
        />
      ))}
    </div>
  );
};

export default Offer;
