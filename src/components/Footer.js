import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Mail,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "#", label: "Facebook" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
    { icon: <Instagram />, href: "#", label: "Instagram" },
    { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-[#a55e3f] text-3xl font-bold mr-2">Li</span>
              <span className="text-3xl font-bold">stee</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Discover curated collections of authentic, handcrafted products
              from artisans around the globe.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-[#a55e3f] transition duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a55e3f]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    to={href}
                    className="text-gray-400 hover:text-[#a55e3f] transition duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a55e3f]">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and
              exclusive offers.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#a55e3f]"
              />
              <button className="bg-[#a55e3f] hover:bg-[#88462e] text-white py-2 px-4 rounded transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#a55e3f]">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="mr-2 text-[#a55e3f]" />
                <span className="text-gray-400">+017 123 456 78</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-[#a55e3f]" />
                <a
                  href="mailto:listee@example.com"
                  className="text-gray-400 hover:text-[#a55e3f] transition duration-300"
                >
                  listee@example.com
                </a>
              </li>
              <li className="mt-4">
                <h4 className="text-[#a55e3f] font-semibold">Our Address:</h4>
                <p className="text-gray-400">
                  123 Handcrafted Street, Artisan City, Country
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 Listee. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#a55e3f] text-sm transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/faq"
              className="text-gray-400 hover:text-[#a55e3f] text-sm transition duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#a55e3f] text-sm transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
