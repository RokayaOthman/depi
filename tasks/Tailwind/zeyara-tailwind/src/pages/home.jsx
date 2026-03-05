//import React from 'react';
import Header from '../components/layouts/header';
import Hero from '../components/sections/hero';
import Reviews from '../components/sections/reviews';
//import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className='bg-[#faf0e689]'>
      <Header />
      <main>
        <Hero />
        {/* Future sections will go here */}
        <Reviews />         
      </main>
    </div>
  );
};

export default HomePage;