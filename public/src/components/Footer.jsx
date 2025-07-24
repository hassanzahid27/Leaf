import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-4 md:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left - Logo, Text, Social Icons */}
        <div className="md:col-span-1">
          <h1 className="text-xl font-bold text-black mb-2">LeafAI</h1>
          <p className="text-sm text-gray-600 mb-4">
            We use multi-mic and echo cancellation technology so that everyone
            can use device.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-green-700 hover:opacity-80 border p-2 rounded-full border-green-800"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="text-green-700 hover:opacity-80 border p-2 rounded-full border-green-800"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="text-green-700 hover:opacity-80 border p-2 rounded-full border-green-800"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="text-green-700 hover:opacity-80 border p-2 rounded-full border-green-800"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Right - 4 Columns */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-2 ml-64">
          {/* Resources */}
          <div>
            <h2 className="text-base font-semibold mb-4">Resources</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-700">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h2 className="text-base font-semibold mb-4">Our Products</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-700">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Media */}
          <div>
            <h2 className="text-base font-semibold mb-4">Media</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-700">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h2 className="text-base font-semibold mb-4">Privacy</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-green-700">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10">
        <p>Copyright LeafAI.com, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
