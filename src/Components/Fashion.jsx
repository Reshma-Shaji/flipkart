import React from 'react';

const Fashion = () => {
  return (
    <div className="">
      <ul className="space-y-3 space-x-4">
        {[
          "Men's top wear",
          "Men's bottom wear",
          "Women's ethnic",
          'Men footwear',
          'Women footwear',
          'Watch and Accessories',
          'Women western',
          'Bags, Suitcases & Luggage',
          'Kids',
          'Essentials',
          'Winter',
        ].map((item, index) => (
          <li
            key={index}
            className="hover:text-black cursor-pointer font-medium"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Fashion;
