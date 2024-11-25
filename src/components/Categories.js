import React from "react";
import img1 from "../assets/hand-made.png";
import img3 from "../assets/jewelry.png";
import img4 from "../assets/knitting.png";
import img5 from "../assets/accessory.png";
import img6 from "../assets/needle.png";
import img7 from "../assets/porcelain.png";

const categories = [
  { name: "Clothes", icon: img1 },
  { name: "Jewelry", icon: img3 },
  { name: "Crafts", icon: img4 },
  { name: "Accessory", icon: img5 },
  { name: "Stitching", icon: img6 },
  { name: "something", icon: img7 },
];

const products = [
  {
    name: "Handmade Scarf",
    category: "Clothes",
    icon: img1,
    description: "A cozy handmade scarf.",
  },
  {
    name: "Gold Necklace",
    category: "Jewelry",
    icon: img3,
    description: "Beautiful gold necklace.",
  },
  {
    name: "Knitted Sweater",
    category: "Crafts",
    icon: img4,
    description: "Warm knitted sweater.",
  },
  {
    name: "Leather Wallet",
    category: "Accessory",
    icon: img5,
    description: "Stylish leather wallet.",
  },
  {
    name: "Needle Set",
    category: "Stitching",
    icon: img6,
    description: "A set of high-quality needles.",
  },
  {
    name: "Porcelain Vase",
    category: "something",
    icon: img7,
    description: "Delicate porcelain vase.",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Category Section */}
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-10 flex items-center justify-center">
          <span className="bg-[#a55e3f] text-white rounded-full w-20 h-20 flex items-center justify-center">
            Cat
          </span>
          <span className="ml-1">egories</span>
        </h1>
        <div className="overflow-x-auto">
          <div className="flex gap-x-6 py-4 justify-center">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-[#a55e3f] rounded-full p-3 shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl flex items-center gap-x-4 min-w-[180px]"
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-12 h-12 object-cover"
                />
                <h2 className="text-lg font-semibold text-[#a55e3f]">
                  {category.name}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Product Section */}
        <h2 className="text-4xl font-bold text-[#a55e3f] mt-16 mb-8 text-center">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={product.icon}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#a55e3f] text-white text-xs font-semibold px-2 py-1 rounded">
                  Featured
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#a55e3f]">
                  {product.name}
                </h3>
                <p className="text-gray-700 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
