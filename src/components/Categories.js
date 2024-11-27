import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Handcrafted Jewelry",
    description: "Beautifully designed handmade jewelry for every occasion.",
    image: "https://via.placeholder.com/300x200?text=Jewelry",
    link: "/categories/jewelry",
  },
  {
    id: 2,
    name: "Home Decor",
    description: "Unique and stylish decor to enhance your living space.",
    image: "https://via.placeholder.com/300x200?text=Home+Decor",
    link: "/categories/home-decor",
  },
  {
    id: 3,
    name: "Apparel",
    description: "Handwoven fabrics and authentic apparel for all seasons.",
    image: "https://via.placeholder.com/300x200?text=Apparel",
    link: "/categories/apparel",
  },
  {
    id: 4,
    name: "Bags & Accessories",
    description: "Artisan-made bags and accessories for your everyday needs.",
    image: "https://via.placeholder.com/300x200?text=Bags+%26+Accessories",
    link: "/categories/bags",
  },
  {
    id: 5,
    name: "Kitchenware",
    description: "Sustainable and stylish handcrafted kitchen essentials.",
    image: "https://via.placeholder.com/300x200?text=Kitchenware",
    link: "/categories/kitchenware",
  },
];

const Categories = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-10 flex items-center justify-center">
          <span className="bg-[#a55e3f] text-white rounded-full w-20 h-20 flex items-center justify-center">
            Cat
          </span>
          <span>egories</span>
        </h1>
      </div>

      {/* Categories Grid */}
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <Link to={category.link}>
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover"
              />
              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#a55e3f] mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
