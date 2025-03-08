import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import JoinSection from './Components/JoinSection';
import Product from './Pages/Product';
import ElectroCategory from './Pages/Home.jsx/ElectroCategory';
import Cart from './Pages/Home.jsx/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<JoinSection />} />
      <Route path="/category" element={<ElectroCategory />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  );
};

export default App;
