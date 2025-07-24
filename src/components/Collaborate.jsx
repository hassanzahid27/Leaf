// import React from "react";

// const Collaborate = () => {
//   return (
//     <section className="py-28 px-6 mx-24 md:px-20 bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] text-center rounded-2xl">
//       <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between ">
//         {/* Heading */}
//         <div>
//           <h2 className="text-2xl sm:text-3xl pb-[14px] md:text-4xl font-bold text-black ">
//             Let's Collaborate With Us
//           </h2>

//           <p className=" text-9xl sm:text-base text-gray-700 font-medium w-96">
//             Ready to revoultionize your organization's search experience?
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="">
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 ml-32 ">
//             <button className="bg-[#317B22] text-white px-16 sm:px-8 py-3 rounded-md font-medium transition duration-300 hover:bg-[#27651a]">
//               Book a Demo
//             </button>
//             <button className="bg-transparent border-2 border-green-600 px-6 sm:px-8 py-3 rounded-md font-medium text-green-600 transition duration-300 hover:bg-green-600 hover:text-white">
//               Request a Quote
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Text */}
//     </section>
//   );
// };

// export default Collaborate;

import React from "react";

const Collaborate = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-[linear-gradient(180deg,rgba(144,222,120,0.15)_0%,rgba(187,249,168,0.15)_100%)] text-center rounded-2xl mx-4 md:mx-24">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        {/* Heading */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Let's Collaborate With Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium max-w-md mx-auto lg:mx-0">
            Ready to revolutionize your organization's search experience?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex-1 mt-8 lg:mt-0 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#317B22] text-white px-8 py-3 rounded-md font-medium transition duration-300 hover:bg-[#27651a] w-full sm:w-auto">
              Book a Demo
            </button>
            <button className="bg-transparent border-2 border-green-600 px-8 py-3 rounded-md font-medium text-green-600 transition duration-300 hover:bg-green-600 hover:text-white w-full sm:w-auto">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
