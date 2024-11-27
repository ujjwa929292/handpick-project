import React from "react";

const servicesData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-[#a55e3f]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25M3.375 4.5h17.25M3.375 4.5v15M20.625 4.5v15M7.5 4.5v15M12 4.5v15M16.5 4.5v15"
        />
      </svg>
    ),
    title: "FREE SHIPPING",
    description: "Enjoy free shipping on all orders.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-[#a55e3f]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 16.5L4.5 12m0 0l5.25-4.5m-5.25 4.5h15M15 6.75V4.5M12.75 3h3m0 0h3.75M19.5 7.5v3m0 0v3m0 3v2.25m0 2.25h-3.75m0 0h-3"
        />
      </svg>
    ),
    title: "MONEY BACK GUARANTEE",
    description: "Satisfaction guaranteed or your money back.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-[#a55e3f]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 4h.01m4.28-10.028l3.53 3.53m-3.53-3.53a5.625 5.625 0 11-7.952 7.951m7.952-7.951a5.625 5.625 0 00-7.952 7.951m-1.606 4.952a9 9 0 1012.727-12.728 9 9 0 00-12.727 12.728z"
        />
      </svg>
    ),
    title: "GIFT DISCOUNT",
    description: "Special discounts on gift purchases.",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-4 mt-10 mb-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-2xl transform hover:-translate-y-2 w-full md:w-1/3"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-center text-lg font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-center text-zinc-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
