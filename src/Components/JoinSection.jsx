import React from 'react';
import Navbar from './Navbar';
import CategorySection from './CategorySection';
import Baner from './Baner';
import ElectroCategory from '../Pages/Home.jsx/ElectroCategory';
import BestSmartphone from '../Pages/Home.jsx/BestSmartphone';
import Offer from '../Pages/Home.jsx/Offer';
import TopPicks from '../Pages/Home.jsx/TopPicks';
import HomeDecor from '../Pages/Home.jsx/HomeDecor';
import Essentials from '../Pages/Home.jsx/Essentials';
import Baner2 from './Baner2';
import FurnitureDeal from '../Pages/Home.jsx/FurnitureDeal';
import SmartPicks from '../Pages/Home.jsx/SmartPicks';
import Beauty from '../Pages/Home.jsx/Beauty';
import Explore from '../Pages/Home.jsx/Explore';
import Offers from '../Pages/Home.jsx/Offers';
import Footer from '../Pages/Footer';
import Product from '../Pages/Product';

const JoinSection = () => {
  return (
    <>
      <Navbar />
      <CategorySection />
      <Baner />
      <ElectroCategory />
      <BestSmartphone />
      <Offer />
      <div className="flex">
        <TopPicks />
        <HomeDecor />
        <Essentials />
      </div>
      <Baner2 />
      <FurnitureDeal />
      <SmartPicks />
      <div className="flex justify-center gap-4">
        <Beauty />
        <Explore />
      </div>
      <Offers />
      <Footer />
    </>
  );
};

export default JoinSection;
