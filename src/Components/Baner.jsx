import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Baner = () => {
  const images = [
    { image: 'baner1.png' },
    { image: 'baner2.jpeg' },
    { image: 'baner3.jpg' },
    { image: 'baner4.png' },
    { image: 'baner5.png' },
    { image: 'jgi.webp' },
    { image: 'baner6.webp' },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div>
      <div className="mt-5 bg-white h-70 w-full">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={3000}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {images.map((item, index) => (
            <img
              key={index}
              className="w-[96%] m-auto h-[250px] rounded-lg"
              src={item.image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Baner;
