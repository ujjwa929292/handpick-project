import React from "react";

const products = [
  {
    id: 1,
    name: "Handcrafted Necklace",
    price: "$45.00",
    description: "An elegant handmade necklace for special occasions.",
    image: "https://via.placeholder.com/300x200?text=Necklace",
  },
  {
    id: 2,
    name: "Decorative Vase",
    price: "$35.00",
    description: "A stunning vase to add a touch of class to your home.",
    image: "https://via.placeholder.com/300x200?text=Vase",
  },
  {
    id: 3,
    name: "Leather Tote Bag",
    price: "$80.00",
    description: "Spacious and stylish, perfect for daily use.",
    image: "https://via.placeholder.com/300x200?text=Tote+Bag",
  },
  {
    id: 4,
    name: "Wooden Salad Bowl",
    price: "$25.00",
    description: "Eco-friendly and handcrafted for your kitchen.",
    image: "https://via.placeholder.com/300x200?text=Salad+Bowl",
  },
  {
    id: 5,
    name: "Woolen Scarf",
    price: "$30.00",
    description: "Stay cozy with this handwoven woolen scarf.",
    image: "https://via.placeholder.com/300x200?text=Woolen+Scarf",
  },
  {
    id: 6,
    name: "Artisan Earrings",
    price: "$20.00",
    description: "Unique earrings crafted with precision.",
    image: "https://via.placeholder.com/300x200?text=Earrings",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-10 flex items-center justify-center">
          <span className="bg-[#a55e3f] text-white rounded-full w-20 h-20 flex items-center justify-center">
            Pro
          </span>
          <span>ducts</span>
        </h1>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#a55e3f] mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">
                  {product.price}
                </span>
                <button className="bg-[#a55e3f] text-white py-2 px-4 rounded-md shadow hover:bg-[#8b4f34] transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
