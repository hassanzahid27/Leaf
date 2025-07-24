// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 mb-9 mt-[20px]">
//       <div className="text-2xl font-bold text-black ml-4 md:ml-16">LeafyAI</div>

//       {/* Mobile menu icon */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-black focus:outline-none"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden md:block ml-[700px] mr-auto">
//         <ul className="flex space-x-[48px] text-sm">
//           <li>
//             <a href="#" className="hover:text-green-600">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-green-600">
//               Solution
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-green-600">
//               Product
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-green-600">
//               About US
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-green-600">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t py-4 z-40">
//           <ul className="flex flex-col items-center space-y-4 text-sm">
//             <li>
//               <a href="#" className="hover:text-green-600">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-green-600">
//                 Solution
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-green-600">
//                 Product
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-green-600">
//                 About US
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-green-600">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Get Started Button */}
//       <div className="hidden md:block">
//         <button className="bg-[#317B22] text-white px-4 py-2 mr-4 md:mr-14 rounded-md text-sm hover:bg-green-700">
//           Get Started
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 mb-9 mt-[20px]">
      {/* Logo */}
      {/* <div className="text-2xl font-bold text-black ml-14 ">LeafyAI</div> */}
      <img src="leaf.png" className="ml-8" alt="" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-12 text-sm">
        <ul className="flex space-x-[48px]">
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

        <button className="bg-[#317B22] text-white px-4 py-2 mr-14 rounded-md text-sm hover:bg-green-700">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
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
