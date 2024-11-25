import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      {/* Page Title */}
      <div>
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-10 flex items-center justify-center">
          <span className="bg-[#a55e3f] text-white rounded-full w-20 h-20 flex items-center justify-center">
            Con
          </span>
          <span>tact Us</span>
        </h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or feedback? We'd love to hear from you! Fill out the
            form, or use the contact details below to reach out to us directly.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#a55e3f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zM2 12c0-4.418 3.582-8 8-8h4c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8H10c-4.418 0-8-3.582-8-8z"
                />
              </svg>
              <span>123 Main Street, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#a55e3f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M9 21h6M5 6h4M8 9l7 12M19 10V3H5v7m14 0h4"
                />
              </svg>
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#a55e3f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.236 3.364a1 1 0 01.632-.232h4.264a1 1 0 01.848.513l3.88 6.867a1 1 0 01-.233 1.266l-10.763 8.97a1 1 0 01-1.497-1.263L14.08 3.73a1 1 0 01.157-.365z"
                />
              </svg>
              <span>contact@yourwebsite.com</span>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Send a Message
          </h3>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#a55e3f] focus:ring-[#a55e3f] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#a55e3f] focus:ring-[#a55e3f] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#a55e3f] focus:ring-[#a55e3f] sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#a55e3f] text-white py-2 px-4 rounded-md shadow hover:bg-[#8b4f34] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
