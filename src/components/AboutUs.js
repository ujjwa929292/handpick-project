import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      {/* Page Title */}
      <div>
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-10 flex items-center justify-center">
          <span className="bg-[#a55e3f] text-white rounded-full w-16 h-16 flex items-center justify-center">
            Ab
          </span>
          <span>out Us</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 space-y-12">
        {/* Mission Statement */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower individuals and businesses by providing 
            high-quality, innovative solutions that inspire growth, creativity, 
            and success. We are committed to creating value and making a positive 
            impact in everything we do.
          </p>
        </section>

        {/* Our Values */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-x-4">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong>Integrity:</strong> We believe in honesty, transparency, 
                and doing the right thing always.
              </span>
            </li>
            <li className="flex items-start gap-x-4">
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
                  d="M13 16h-1v-4h-1m-1-4h6m2 10a2 2 0 100-4 2 2 0 000 4zm4-12H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"
                />
              </svg>
              <span>
                <strong>Innovation:</strong> We strive to push boundaries and 
                explore new opportunities to deliver exceptional solutions.
              </span>
            </li>
            <li className="flex items-start gap-x-4">
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
                  d="M12 8c.637 0 1.176.39 1.414.965l3.682 7.596A1.75 1.75 0 0115.558 19H8.442a1.75 1.75 0 01-1.538-2.439l3.682-7.596A1.751 1.751 0 0112 8z"
                />
              </svg>
              <span>
                <strong>Excellence:</strong> We are dedicated to delivering 
                quality in every aspect of our work.
              </span>
            </li>
          </ul>
        </section>

        {/* Meet the Team */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="John Doe"
                  className="w-full h-full object-cover rounded-full shadow"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Ujjwal Vij</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Jane Smith"
                  className="w-full h-full object-cover rounded-full shadow"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Ayushi Verma</h3>
              <p className="text-sm text-gray-600">Chief Technology Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Michael Brown"
                  className="w-full h-full object-cover rounded-full shadow"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Ujjwal Vij</h3>
              <p className="text-sm text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
