import React from "react";
import ProductCard from "../productCart";
const categories = ["Women", "Fashion", "Suits"];
import ProductGallery from "../slider";
const Hero = () => {
  return (
    <>
      {/* div that holds two cards side by side */}
      <div className=" mt-6 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-6">
        {/* Card-1 - Image Section */}
        <div className=" flex-1">
          {/* Products Details Text */}
          <div className="mb-4 flex flex-col items-start">
            <p className="font-sans text-lg sm:text-xl md:text-2xl lg:text-[21px] font-bold">
              Products Details
            </p>
            <nav className="text-gray-600 text-sm mb-2">
              {categories.map((item, index) => (
                <span key={index}>
                  {item}
                  {index < categories.length - 1 && (
                    <span className="font-sans mx-2">&gt;</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
          {/* Large Photo */}
          {/* <div
            className="rounded-[16px] w-full max-w-[651px] aspect-[651/484] bg-no-repeat bg-[length:120%] bg-[position:center_80%]"
            style={{ backgroundImage: "url('src/assets/img-1.png')" }}
          ></div> */}
          <ProductGallery />
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
