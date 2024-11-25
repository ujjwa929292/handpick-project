import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Mail,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import apple from "../assets/apple.png";
import amex from "../assets/amex.png";
import master from "../assets/master.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";
import google from "../assets/google.png";

export default function Footer() {
  const footerSections = [
    {
      title: "About us",
      links: [
        { to: "#", label: "Our Product" },
        { to: "#", label: "Documentation" },
        { to: "#", label: "Our Services" },
        { to: "#", label: "Get Started Us" },
        { to: "#", label: "Contact Us" },
      ],
    },
    {
      title: "Quick links",
      links: [
        { to: "#", label: "Market Place" },
        { to: "#", label: "Documentation" },
        { to: "#", label: "Customers" },
        { to: "#", label: "Carriers" },
        { to: "#", label: "Our Blog" },
      ],
    },
    {
      title: "Top Cities",
      links: [
        { to: "#", label: "Manhattan" },
        { to: "#", label: "Los Angeles" },
        { to: "#", label: "Houston" },
        { to: "#", label: "Chicago" },
        { to: "#", label: "Alabama" },
      ],
    },
  ];

  const paymentMethods = [
    { src: amex, alt: "American Express" },
    { src: apple, alt: "Apple Pay" },
    { src: google, alt: "Google Pay" },
    { src: master, alt: "MasterCard" },
    { src: paypal, alt: "PayPal" },
    { src: visa, alt: "Visa" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 mt-10">
        {/* Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-[#a55e3f] text-3xl font-bold mr-2">L</span>
              <span className="text-3xl font-bold">istee</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Discover the finest hand-crafted products from around the world,
              curated just for you.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: <Facebook />, label: "Facebook" },
                { icon: <Twitter />, label: "Twitter" },
                { icon: <Instagram />, label: "Instagram" },
                { icon: <LinkedIn />, label: "LinkedIn" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="/"
                  className="text-gray-400 hover:text-[#a55e3f] transition duration-300"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-lg font-semibold mb-4 text-[#a55e3f]">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {links.map(({ to, label }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="text-gray-400 hover:text-[#a55e3f] transition duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Communication Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#a55e3f]">
                Communication
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="mr-2 text-[#a55e3f]" />
                  <span className="text-gray-400">Call Us</span>
                </li>
                <li>
                  <a
                    href="tel:+017123456789"
                    className="text-white hover:text-[#a55e3f] transition duration-300"
                  >
                    +017 123 456 78
                  </a>
                </li>
                <li className="flex items-center mt-4">
                  <Mail className="mr-2 text-[#a55e3f]" />
                  <span className="text-gray-400">Send Message</span>
                </li>
                <li>
                  <a
                    href="mailto:listee@example.com"
                    className="text-white hover:text-[#a55e3f] transition duration-300"
                  >
                    listee@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2">
              We Accept
            </h4>
            <div className="flex space-x-2">
              {paymentMethods.map(({ src, alt }) => (
                <img
                  key={alt}
                  src={src}
                  alt={`${alt} logo`}
                  width={40}
                  height={30}
                  className="bg-white rounded"
                />
              ))}
            </div>
          </div>
        </div> */}

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            All Copyrights Reserved © 2023 - Listee.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["Privacy", "Faq", "Terms"].map((label) => (
              <Link
                key={label}
                to="#"
                className="text-gray-400 hover:text-[#a55e3f] text-sm transition duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
