import React from "react";

const Header = () => {
  return (
    <header className="bg-[#E0E0E0] p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-[#a55e3f]">Liistee</span>
        </div>
        <nav className="flex space-x-6">
          {["Home", "Listings", "Pages", "User Pages", "Blog", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="/"
                className="text-[#a55e3f] hover:text-gray-900 transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-[#a55e3f] hover:text-gray-900 px-4 py-2 rounded-lg transition-colors duration-300"
          >
            Sign Up
          </a>
          <a
            href="/"
            className="relative group cursor-pointer border-2 font-medium border-[#a55e3f] text-[#a55e3f] overflow-hidden rounded-md px-3.5 py-2 z-10"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#a55e3f] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#a55e3f] transition duration-300 group-hover:text-white ease">
              Sign In
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
