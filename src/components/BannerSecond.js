import React from "react";
import img from "../assets/image-bg.jpg";

function BannerSecond() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-28 lg:py-36"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Handcrafted Elegance for Every Occasion
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-8">
          Discover the beauty of authentic handwoven textiles and handmade
          treasures that tell a story of craftsmanship and passion.
        </p>
        <button
          className="bg-[#a55e3f] hover:bg-[#8b4f34] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          onClick={() => console.log("Shop Now Clicked")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default BannerSecond;
