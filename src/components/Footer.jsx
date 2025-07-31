import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-8 px-4 sm:px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 lg:gap-72 lg:mr-52">
        {/* Left - Logo, Text, Social Icons */}
        <div className="md:col-span-2  ">
          <img
            src="leaf.png"
            className="mb-4 w-24 sm:w-28 md:w-32"
            alt="LeafAI logo"
          />
          <p className="text-[16px] text-gray-600 mb-6 max-w-sm">
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
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {/* Resources */}
          <div>
            <h2 className="text-base font-bold mb-3">Resources</h2>
            <ul className="space-y-3 text-[18px] text-[#777777]">
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
            <h2 className="text-base font-bold mb-3">Our Products</h2>
            <ul className="space-y-3 text-[18px] text-[#777777]">
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
            <h2 className="text-base font-bold mb-3">Media</h2>
            <ul className="space-y-3 text-[18px] text-[#777777]">
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
            <h2 className="text-base font-bold mb-3">Privacy</h2>
            <ul className="space-y-3 text-[18px] text-[#777777]">
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
