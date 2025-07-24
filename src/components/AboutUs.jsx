// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className="bg-[#F9FAF9] px-4 md:px-10 py-20">
//       {/* Title and Text */}
//       <div className="text-center md:text-left max-w-6xl mx-auto mb-16 px-4">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4 mr-56 ">
//           About Us
//         </h2>
//         <p className="text-gray-600 text-base  max-w-3xl mx-auto md:mx-0 pr-">
//           LeafAI Search sprouted from a simple idea: make enterprise knowledge
//           as easy to find as a Google search. We're a team of AI enthusiasts,
//           search experts, and UX designers on a mission to revolutionize how
//           organizations discover and utilize their collective knowledge.
//         </p>
//       </div>

//       {/* Content Row */}
//       <div className="flex flex-col lg:flex-row    gap-10 px-4 md:px-0 pr-48">
//         {/* Left Box */}
//         <div className="relative w-[320px] md:w-[350px] h-[250px] rounded-2xl overflow-hidden shadow-lg">
//           <img
//             src="black.png"
//             alt="background"
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay Content */}
//           <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
//             {/* Top Section */}
//             <div>
//               <h2 className="text-5xl font-extrabold text-white">
//                 920<span className="text-green-400">+</span>
//               </h2>
//               <p className="text-sm text-gray-300 mt-1">Softwares Support</p>
//             </div>

//             {/* Bottom Icons */}
//             <div className="flex items-center gap-3">
//               {["pdf.png", "txt.png", "pdf.png", "xls.png"].map(
//                 (icon, index) => (
//                   <div
//                     key={index}
//                     className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center"
//                   >
//                     <img
//                       src={icon}
//                       alt={`icon-${index}`}
//                       className="w-5 h-5 md:w-6 md:h-6 object-contain"
//                     />
//                   </div>
//                 )
//               )}
//               <span className="text-white text-3xl font-bold leading-none">
//                 +
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Box */}
//         <div className="relative bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] rounded-xl p-6 max-w-xl w-full">
//           {/* Grid Icons */}
//           <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
//             {[
//               "xml.png",
//               "pdf.png",
//               "txt.png",
//               "xls.png",
//               "ppt.png",
//               "doc.png",
//               "pdf.png",
//             ].map((icon, index) => (
//               <img
//                 key={index}
//                 src={icon}
//                 alt="icon"
//                 className="bg-white rounded-xl shadow p-3 w-16 h-16 object-contain"
//               />
//             ))}
//           </div>

//           {/* Dashed Arrow */}
//           <div className="absolute top-1/2 right-20 transform -translate-y-1/2 h-px w-16 border-t border-green-500 border-dashed" />

//           {/* Leaf Icon */}
//           <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow">
//             <img src="leaf-logo.png" alt="Leaf AI" className="w-6 h-6" />
//           </div>
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
      <div className="mb-[50px] max-w-7xl mx-auto flex justify-between items-center gap-[30px] px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
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
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 px-4 md:px-0">
        {/* Left Box */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:w-[330px] h-[270px] rounded-2xl overflow-hidden shadow-lg ml-24">
          <img
            src="black.png"
            alt="background"
            className="w-full h-full object-cover "
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
            {/* Top Section */}
            <div>
              <h2 className="text-5xl font-extrabold text-white">
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
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center"
                  >
                    <img
                      src={icon}
                      alt={`icon-${index}`}
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                  </div>
                )
              )}
              <span className="text-white text-3xl font-bold leading-none">
                +
              </span>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="relative bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] rounded-xl p-6 w-[800px] h-[270px]  ">
          <img
            src="dotted.svg"
            className="ml-56 mt-12 positon: absolute"
            alt=""
          />
          {/* Grid Icons */}

          <div className="  w-[30%] pb-96 rounded-full h-full flex flex-wrap ">
            <img
              src="xml.png"
              alt="XML"
              className="bg-white rounded-xl shadow p-2 w-14 h-14 object-contain mr-4 mt-6 "
            />
            <img
              src="xls.png"
              alt="XML"
              className="bg-white rounded-xl shadow p-2 w-14 h-14 object-contain ml-1 "
            />
            <img
              src="pdf.png"
              alt="PDF"
              className="bg-white rounded-xl shadow p-3 w-16 h-16 object-contain ml-4 mt-6"
            />
            <img
              src="txt.png"
              alt="TXT"
              className="bg-white rounded-xl shadow p-1 w-16 h-16 object-contain mask-linear-18 mt-4 mr-4"
            />

            <img
              src="ppt.png"
              alt="PPT"
              className="bg-white rounded-xl shadow p-2 w-14 h-14 object-contain"
            />
            <img
              src="doc.png"
              alt="DOC"
              className="bg-white rounded-xl shadow p-2 w-14 h-14 object-contain mt-4 ml-4 "
            />
            <img
              src="pdf.png"
              alt="PDF again"
              className="bg-white rounded-xl shadow p-3 w-16 h-16 object-contain ml-20"
            />
          </div>

          {/* Dashed Arrow */}
          <div className="hidden lg:block absolute top-32 right-48 transform -translate-y-1/2 h-px w-16 border-t border-green-500 border-dashed mr-32">
            <img src="p.png" className="ml-16  " alt="" />
          </div>

          {/* <div>
            <img src="dotted.svg" className="ml-56 " alt="" />
          </div> */}

          {/* Leaf Icon */}
          {/* <div className="hidden lg:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow">
            <img src="leaf-logo.png" alt="Leaf AI" className="w-6 h-6" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
