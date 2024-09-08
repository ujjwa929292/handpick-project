import React from "react";

export default function NewsLetter() {
  return (
    <div
      className="bg-gray-800 text-white p-8 rounded-lg max-w-3xl mx-auto"
      style={{
        backgroundImage: `url('/Hexagon.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-4">
        Stay Tuned With Us
      </h2>
      <p className="text-center mb-6">
        Subscribe to our newsletter and never miss our latest news and
        promotions. Our newsletter is sent once a week, every Thursday.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="px-4 py-2 border border-gray-300 rounded bg-gray-200 text-gray-800 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
