import React from "react";
import img from "../assets/img-bg2.jpg";

function BannerThird() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24 lg:py-32"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#000000cc] via-[#00000080] to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 uppercase">
          Discover Timeless Elegance
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-medium mb-8">
          Experience the luxury of handcrafted products made with precision,
          passion, and care. Embrace the heritage of tradition in every thread.
        </p>

        {/* Decorative Line */}
        <div className="h-1 w-16 bg-[#a55e3f] mx-auto mb-6"></div>

        <div className="flex justify-center items-center gap-4">
          <button
            className="bg-[#a55e3f] hover:bg-[#8b4f34] text-white text-sm sm:text-base lg:text-lg font-semibold py-3 px-5 rounded-lg shadow-md transition-all duration-300"
            onClick={() => console.log("Explore Collection")}
          >
            Explore Collection
          </button>
          <button
            className="bg-transparent border border-[#a55e3f] hover:bg-[#8b4f34] hover:text-white text-[#a55e3f] text-sm sm:text-base lg:text-lg font-semibold py-3 px-5 rounded-lg transition-all duration-300"
            onClick={() => console.log("Learn More")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerThird;
