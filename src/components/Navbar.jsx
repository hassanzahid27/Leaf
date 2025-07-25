import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white sticky top-0 z-50 mb-9 mt-[20px]">
      {/* Logo */}
      <img
        src="leaf.png"
        className="ml-2 sm:ml-8 w-28 sm:w-32"
        alt="LeafAI Logo"
      />

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-12 text-sm">
        <ul className="flex space-x-[36px]">
          <li>
            <a href="#" className="hover:text-green-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Solution
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              About US
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600">
              Contact
            </a>
          </li>
        </ul>

        <button className="bg-[#317B22] text-white px-4 py-2 ml-6 mr-8 rounded-md text-sm hover:bg-green-700 mr-16">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Solution
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                About US
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Contact
              </a>
            </li>
            <li>
              <button className="bg-[#317B22] text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
