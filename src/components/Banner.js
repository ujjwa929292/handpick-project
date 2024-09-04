// src/components/Banner.js
import React from "react";
import img from "../assets/image2.png";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={img} alt="HoverImage" className="object-cover w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 md:px-12">
        <h1 className="text-[#E0E0E0] text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-wide shadow-md">
          Your home, your story, handcrafted.
        </h1>
        <p className="text-[#E0E0E0] text-lg md:text-xl max-w-xl mx-auto">
          Discover the perfect blend of comfort and style with our exclusive
          range.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="relative px-5 py-2 font-medium text-white group inline-block"
          >
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#a55e3f] group-hover:bg-[#8b4b29] group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#8b4b29] group-hover:bg-[#a55e3f] group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#7a4b2f] -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#a55e3f] -rotate-12"></span>
            <span className="relative">Learn More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
