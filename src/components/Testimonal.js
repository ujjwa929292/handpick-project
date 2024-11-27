import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sara from "../assets/profile/profile_sara.jpg"
import eric from "../assets/profile/profile_eric.jpg"
import james from "../assets/profile/profile_jason.jpg"

// Testimonials Data
const testimonials = [
  {
    name: "Eric Bett",
    role: "Happy Customer",
    image: eric,
    content:
      "The craftsmanship in these handwoven scarves is unmatched! The attention to detail and the feel of the fabric is incredible. I'll definitely be buying more.",
  },
  {
    name: "Sara Galleti",
    role: "Artisan Enthusiast",
    image: sara,
    content:
      "I've been searching for authentic handloom products, and this shop exceeded my expectations. The saree I purchased is a true piece of art.",
  },
  {
    name: "James Colby",
    role: "Frequent Buyer",
    image: james,
    content:
      "Every item I've purchased has been a blend of quality and authenticity. This is my go-to store for unique, handcrafted goods that tell a story.",
  },
];


// Custom Arrow Component
const CustomArrow = ({ onClick, direction }) => (
  <div
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-[-30px]" : "right-[-30px]"
    } top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow cursor-pointer hover:bg-gray-100 transition duration-300`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5 text-black"
    >
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      )}
    </svg>
  </div>
);

// Progress Bar Component
const ProgressBar = ({ numItems, activeIndex }) => (
  <div className="flex space-x-2 w-20 mb-4 mx-auto">
    {Array.from({ length: numItems }, (_, index) => (
      <div
        key={index}
        className={`relative flex-1 h-1.5 rounded-full ${
          index === activeIndex ? "bg-[#a55e3f]" : "bg-gray-300"
        } transition-all duration-300 ease-in-out`}
      >
        {index === activeIndex && (
          <div
            className="absolute inset-0 bg-[#a55e3f] rounded-full"
            style={{ transition: "width 5s linear", width: "100%" }}
          ></div>
        )}
      </div>
    ))}
  </div>
);

// Testimonial Slider Component
const TestimonialSlider = ({ setActiveTestimonial, activeTestimonial }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "10%",
    beforeChange: (_, next) => setActiveTestimonial(next),
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { centerPadding: "5%" },
      },
      {
        breakpoint: 768,
        settings: { centerPadding: "0" },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`p-6 sm:p-8 ${
            index === activeTestimonial ? "" : "opacity-70 blur-sm"
          } transition-opacity duration-300`}
        >
          <div className="relative mx-auto bg-white rounded-lg shadow-lg p-8">
            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-gray-700 text-base sm:text-lg mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="flex justify-center items-center mt-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="ml-4 text-left">
                  <p className="text-gray-800 font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

// Main Testimonial Component
const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-gray-100 min-h-auto flex flex-col items-center justify-center px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-[#a55e3f] flex items-center justify-center mb-2">
          <span className="bg-[#a55e3f] text-white rounded-full w-16 h-16 flex items-center justify-center">
            Re
          </span>
          <span>view</span>
        </h1>
        <p className="text-gray-600 text-base">
          Hear from the people who love our handmade treasures.
        </p>
      </div>
      </div>

      {/* Slider */}
      <div className="w-full max-w-6xl mx-auto">
        <TestimonialSlider
          setActiveTestimonial={setActiveTestimonial}
          activeTestimonial={activeTestimonial}
        />
      </div>

      {/* Progress Bar */}
      <div className="mt-8 w-full max-w-4xl mx-auto">
        <ProgressBar
          numItems={testimonials.length}
          activeIndex={activeTestimonial}
        />
      </div>
    </div>
  );
};

export default Testimonial;
