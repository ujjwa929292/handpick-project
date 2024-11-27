import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-[#a55e3f] mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Listee! Your privacy is critically important to us. This
          Privacy Policy describes how we collect, use, and protect your
          personal information when you use our website or services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and payment details when you register, make a purchase, or
            contact us.
          </li>
          <li>
            <strong>Device Information:</strong> Details about your browser,
            IP address, time zone, and cookies.
          </li>
          <li>
            <strong>Usage Information:</strong> Information about how you
            interact with our site, including pages viewed and links clicked.
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>To process transactions and provide our services.</li>
          <li>To improve your user experience and personalize content.</li>
          <li>
            To send promotional emails, newsletters, or updates if you have
            subscribed.
          </li>
          <li>To respond to your inquiries and provide customer support.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We respect your privacy and will not sell, trade, or rent your
          personal information to third parties. However, we may share your
          information in the following cases:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            With third-party service providers (e.g., payment processors or
            analytics tools) to facilitate our services.
          </li>
          <li>To comply with legal obligations or enforce our policies.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          4. Your Rights
        </h2>
        <p className="text-gray-700 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Access and request a copy of your personal data.</li>
          <li>Correct or update inaccurate or incomplete information.</li>
          <li>Request the deletion of your personal data.</li>
          <li>
            Opt-out of marketing communications by clicking the "unsubscribe"
            link in our emails.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          5. Cookies and Tracking
        </h2>
        <p className="text-gray-700 mb-4">
          We use cookies to enhance your experience, analyze site traffic, and
          improve our services. By using our site, you consent to our use of
          cookies. You can manage your cookie preferences through your browser
          settings.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          6. Data Security
        </h2>
        <p className="text-gray-700 mb-4">
          We implement industry-standard security measures to protect your
          personal information. However, no method of transmission over the
          Internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. We encourage you
          to review this page periodically for any changes. Your continued use
          of our services signifies your acceptance of the updated policy.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-[#a55e3f] mt-6 mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </p>
        <ul className="list-none pl-0 text-gray-700 mt-2 space-y-1">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:listee@example.com"
              className="text-[#a55e3f] hover:underline"
            >
              listee@example.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+017123456789" className="text-[#a55e3f] hover:underline">
              +017 123 456 78
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPage;
