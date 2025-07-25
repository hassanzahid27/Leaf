// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className="bg-[#F9FAF9] px-4 md:px-10 py-16">
//       {/* Title and Text */}
//       <div className="mb-12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 px-4">
//         <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 min-w-[200px]">
//           About Us
//         </h2>
//         <p className="text-gray-600 text-base max-w-4xl">
//           LeafAI Search sprouted from a simple idea: make enterprise knowledge
//           as easy to find as a Google search. We're a team of AI enthusiasts,
//           search experts, and UX designers on a mission to revolutionize how
//           organizations discover and utilize their collective knowledge.
//         </p>
//       </div>

//       {/* Content Row */}
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 px-4">
//         {/* Left Box */}

//         <div className="relative w-full max-w-xs sm:max-w-sm md:w-[330px] h-[270px] rounded-2xl overflow-hidden ml-28 shadow-lg">
//           <img
//             src="black.png"
//             alt="background"
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay Content */}
//           <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
//             {/* Top Section */}
//             <div>
//               <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
//                 920<span className="text-green-400">+</span>
//               </h2>
//               <p className="text-sm text-gray-300 mt-1">Softwares Support</p>
//             </div>

//             {/* Bottom Icons */}
//             <div className="flex items-center gap-3 flex-wrap">
//               {["pdf.png", "txt.png", "pdf.png", "xls.png"].map(
//                 (icon, index) => (
//                   <div
//                     key={index}
//                     className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center"
//                   >
//                     <img
//                       src={icon}
//                       alt={`icon-${index}`}
//                       className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
//                     />
//                   </div>
//                 )
//               )}
//               <span className="text-white text-2xl sm:text-3xl font-bold leading-none">
//                 +
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="relative bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] rounded-xl p-6 sm:p-6 w-full h-68 max-w-4xl flex items-center justify-between   flex-wrap sm:flex-nowrap">
//           {/* Images */}
//           <img
//             src="pics.png"
//             className="h-36 sm:h-44 md:h-52 w-auto object-contain"
//             alt="pic"
//           />
//           <img
//             src="dotted.svg"
//             className=" sm:h-28 md:h-28 w-auto object-contain "
//             alt="dotted"
//           />
//           <img
//             src="p.png"
//             className="h-8 sm:h-28 md:h-24 w-auto object-contain mr-96"
//             alt="p"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#F9FAF9] px-4 md:px-10 py-16">
      {/* Title and Text */}
      <div className="mb-12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 min-w-[200px]">
          About Us
        </h2>
        <p className="text-gray-600 text-base max-w-4xl">
          LeafAI Search sprouted from a simple idea: make enterprise knowledge
          as easy to find as a Google search. We're a team of AI enthusiasts,
          search experts, and UX designers on a mission to revolutionize how
          organizations discover and utilize their collective knowledge.
        </p>
      </div>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 px-4">
        {/* Left Box */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:w-[330px] h-[270px] rounded-2xl overflow-hidden lg:ml-20 shadow-lg">
          <img
            src="black.png"
            alt="background"
            className="w-full h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
            {/* Top Section */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
                920<span className="text-green-400">+</span>
              </h2>
              <p className="text-sm text-gray-300 mt-1">Softwares Support</p>
            </div>

            {/* Bottom Icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {["pdf.png", "txt.png", "pdf.png", "xls.png"].map(
                (icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center"
                  >
                    <img
                      src={icon}
                      alt={`icon-${index}`}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                )
              )}
              <span className="text-white text-2xl sm:text-3xl font-bold leading-none">
                +
              </span>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="relative bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] rounded-xl p-4 sm:p-6 w-full max-w-4xl h-auto flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
          {/* Images */}
          <img
            src="pics.png"
            className="h-24 sm:h-36 md:h-44 lg:h-52 w-auto object-contain"
            alt="pic"
          />
          <img
            src="dotted.svg"
            className="h-20 sm:h-28 md:h-28 w-auto object-contain"
            alt="dotted"
          />
          <img
            src="p.png"
            className="h-8 sm:h-20 md:h-24 w-auto object-contain lg:mr-80"
            alt="p"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
