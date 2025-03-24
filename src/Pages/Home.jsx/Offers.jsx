import React from 'react';

const Offers = () => {
  const images = ['offers1.webp', 'offers2.webp', 'offers3.webp'];

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

export default Offers;
