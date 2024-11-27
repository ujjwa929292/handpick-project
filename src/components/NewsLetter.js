import React from "react";

export default function NewsLetter() {
  return (
    <div className="bg-gray-100 py-10">
      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#a55e3f] text-center mb-4">
          Stay Tuned With Us
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Subscribe to our newsletter and never miss our latest news and
          promotions. Delivered to your inbox every Thursday!
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 border border-gray-300 rounded w-full sm:w-auto bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a55e3f]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#a55e3f] text-white rounded font-semibold hover:bg-[#8c4d32] transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
