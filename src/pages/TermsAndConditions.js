import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-700 mb-8">
          Welcome to Listee! These terms and conditions outline the rules and
          regulations for the use of our website and services. By accessing
          this website, you agree to comply with these terms.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By accessing and using Listee, you agree to be bound by these terms
            and conditions. If you do not agree with any part of the terms, you
            may not use our website or services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            2. Use of Our Services
          </h2>
          <p className="text-gray-700">
            You agree to use Listee only for lawful purposes and in a way that
            does not infringe upon the rights of others or restrict their use of
            the platform. Any fraudulent, abusive, or illegal activity is
            strictly prohibited.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700">
            All content, trademarks, and data on this website, including but not
            limited to text, images, logos, and software, are the property of
            Listee or its content suppliers and are protected by copyright laws.
            You may not reproduce, distribute, or use any content without
            explicit permission.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            4. User Accounts
          </h2>
          <p className="text-gray-700">
            When creating an account on Listee, you must provide accurate and
            up-to-date information. You are responsible for safeguarding your
            account credentials. We reserve the right to suspend or terminate
            accounts found to be violating these terms.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            Listee is not liable for any direct, indirect, incidental, or
            consequential damages arising from your use of the platform. This
            includes but is not limited to loss of data, profits, or goodwill.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            6. Third-Party Links
          </h2>
          <p className="text-gray-700">
            Listee may contain links to third-party websites. These links are
            provided for your convenience, and we do not endorse or take
            responsibility for the content or practices of third-party websites.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700">
            We reserve the right to update or modify these terms at any time. It
            is your responsibility to review this page periodically for changes.
            Your continued use of Listee constitutes acceptance of any updates.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            8. Governing Law
          </h2>
          <p className="text-gray-700">
            These terms and conditions are governed by and construed in
            accordance with the laws of your jurisdiction. Any disputes will be
            subject to the exclusive jurisdiction of the courts in your region.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#a55e3f] mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about these terms, feel free to contact us
            at:
          </p>
          <ul className="text-gray-700 mt-4">
            <li>Email: <a href="mailto:listee@example.com" className="text-[#a55e3f]">listee@example.com</a></li>
            <li>Phone: +017 123 456 78</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
