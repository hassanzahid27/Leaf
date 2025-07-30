import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 px-4 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-56 mr-52">
        {/* Left - Logo, Text, Social Icons */}
        <div className="md:col-span-2">
          {/* <h1 className="text-2xl font-bold text-black mb-3">LeafAI</h1> */}
          <img src="leaf.png" className="mb-3" alt="" />
          <p className="text-sm text-gray-600 mb-6 max-w-sm">
            We use multi-mic and echo cancellation technology so that everyone
            can use device.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="text-white hover:bg-green-100 p-2 rounded-full border border-green-700 bg-[#317B22]"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-green-700 hover:bg-green-100 p-2 rounded-full border border-green-700"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-green-700 hover:bg-green-100 p-2 rounded-full border border-green-700"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-green-700 hover:bg-green-100 p-2 rounded-full border border-green-700"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right - Links */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-16 ml-2">
          {/* Resources */}
          <div>
            <h2 className="text-base font-bold mb-4">Resources</h2>
            <ul className="space-y-5 text-sm text-gray-600">
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
            <h2 className="text-base font-bold mb-4">Our Products</h2>
            <ul className="space-y-5 text-sm text-gray-600">
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
            <h2 className="text-base font-bold mb-4">Media</h2>
            <ul className="space-y-5 text-sm text-gray-600">
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
            <h2 className="text-base font-bold mb-4">Privacy</h2>
            <ul className="space-y-5 text-sm text-gray-600">
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
        &copy; {new Date().getFullYear()} LeafAI.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
