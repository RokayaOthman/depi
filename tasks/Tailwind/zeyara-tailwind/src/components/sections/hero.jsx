import React from 'react';
import ProductCard from '../productCart';

const Hero = () => {
  return (
    <>
      {/* div that holds two cards side by side */}
      <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-16">
        {/* Card-1 - Image Section */}
        <div className="flex-1">
          {/* Products Details Text */}
          <div className="mb-4">
            <h1 className="font-[Poppins] text-2xl font-bold">Products Details</h1>
            <h2 className="text-gray-600">Women &gt; Fashion &gt; Suits</h2>
          </div>
          {/* Large Photo */}
          <div
            className="rounded-[16px] w-full max-w-[651px] aspect-[651/484] bg-no-repeat bg-[length:120%] bg-[position:center_80%]"
            style={{ backgroundImage: "url('src/assets/img-1.png')" }}
          ></div>
        </div>
        
        {/* Card-2 - Product Info Card */}
        <div className="flex-1">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Hero;