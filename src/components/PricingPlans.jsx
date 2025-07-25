// import React from "react";

// const PricingPlans = () => {
//   return (
//     <section className="py-16 px-4 md:px-20 bg-white">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Pricing Plans
//         </h2>
//         <p className="text-gray-600 mt-2 text-sm md:text-base">
//           Discover the power of intelligent search across{" "}
//           <br className="hidden md:block" />
//           your entire digital workspace.
//         </p>
//       </div>

//       {/* Toggle Buttons */}
//       <div className="flex justify-center mb-12">
//         <div className="inline-flex bg-gray-200 rounded-full p-1">
//           <button className="px-4 py-1 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-black transition">
//             Monthly billing
//           </button>
//           <button className="px-4 py-1 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-black transition">
//             Annual billing
//           </button>
//         </div>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
//         {/* Starter */}
//         <div className="rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full">
//           <div className="flex-1">
//             <div className="text-center mb-4">
//               <span className="text-xs font-semibold text-green-700 bg-[rgba(49,123,34,0.1)] px-3 py-1 rounded-full uppercase">
//                 STARTER
//               </span>
//             </div>
//             <h3 className="text-3xl font-bold text-center mb-1">
//               $49<span className="text-base font-normal">/m</span>
//             </h3>
//             <p className="text-sm text-gray-600 text-center mb-6">
//               Up to 2 models free forever
//             </p>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Basic search functionality
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Up to 10,000 documents indexed
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>5 user
//                 accounts
//               </li>
//             </ul>
//           </div>
//           <button className="mt-6 text-sm font-medium px-4 py-3 rounded-md w-full bg-white text-black border border-[rgba(0,0,0,0.2)] hover:bg-gray-50">
//             Get started for free
//           </button>
//         </div>

//         {/* Professional */}
//         <div className="rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full">
//           <div className="flex-1">
//             <div className="text-center mb-4">
//               <span className="text-xs font-semibold text-green-700 bg-[rgba(49,123,34,0.1)] px-3 py-1 rounded-full uppercase">
//                 PROFESSIONAL
//               </span>
//             </div>
//             <h3 className="text-3xl font-bold text-center mb-1">
//               $199<span className="text-base font-normal">/m</span>
//             </h3>
//             <p className="text-sm text-gray-600 text-center mb-6">
//               Up to 2 models free forever
//             </p>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Advanced search algorithms
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Up to 100,000 documents indexed
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 50 user accounts
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Custom data connectors
//               </li>
//             </ul>
//           </div>
//           <button className="mt-6 text-sm font-medium px-4 py-3 rounded-md w-full bg-[#317B22] text-white hover:bg-green-700">
//             Get started for free
//           </button>
//         </div>

//         {/* Enterprise */}
//         <div className="rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full">
//           <div className="flex-1">
//             <div className="text-center mb-4">
//               <span className="text-xs font-semibold text-green-700 bg-[rgba(49,123,34,0.1)] px-3 py-1 rounded-full uppercase">
//                 ENTERPRISE
//               </span>
//             </div>
//             <h3 className="text-3xl font-bold text-center mb-1">
//               Custom pricing
//             </h3>
//             <p className="text-sm text-gray-600 text-center mb-6">
//               Up to 2 models free forever
//             </p>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 AI-powered predictive search
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Unlimited document indexing
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Unlimited user accounts
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Dedicated support team
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-600 font-bold mr-2">✔</span>
//                 Custom integration solutions
//               </li>
//             </ul>
//           </div>
//           <button className="mt-6 text-sm font-medium px-4 py-3 rounded-md w-full bg-white text-black border border-[rgba(0,0,0,0.2)] hover:bg-gray-50">
//             Get started for free
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;

import React from "react";

const PricingPlans = () => {
  return (
    <section className="py-16 px-4 sm:px-10 md:px-16 lg:px-20 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Pricing Plans
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Discover the power of intelligent search across{" "}
          <br className="hidden md:block" />
          your entire digital workspace.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-200 rounded-full p-1 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          <button className="w-1/2 sm:w-auto px-4 py-1 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-black transition">
            Monthly billing
          </button>
          <button className="w-1/2 sm:w-auto px-4 py-1 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:text-black transition">
            Annual billing
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
        {/* Starter */}
        <div className="rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full">
          <div className="flex-1">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold text-green-700 bg-[rgba(49,123,34,0.1)] px-3 py-1 rounded-full uppercase">
                STARTER
              </span>
            </div>
            <h3 className="text-3xl font-bold text-center mb-1">
              $49<span className="text-base font-normal">/m</span>
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Up to 2 models free forever
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Basic search functionality
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Up to 10,000 documents indexed
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>5 user
                accounts
              </li>
            </ul>
          </div>
          <button className="mt-6 text-sm font-medium px-4 py-3 rounded-md w-full bg-white text-black border border-[rgba(0,0,0,0.2)] hover:bg-gray-50">
            Get started for free
          </button>
        </div>

        {/* Professional */}
        <div className="rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full">
          <div className="flex-1">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold text-green-700 bg-[rgba(49,123,34,0.1)] px-3 py-1 rounded-full uppercase">
                PROFESSIONAL
              </span>
            </div>
            <h3 className="text-3xl font-bold text-center mb-1">
              $199<span className="text-base font-normal">/m</span>
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Up to 2 models free forever
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Advanced search algorithms
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Up to 100,000 documents indexed
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                50 user accounts
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Custom data connectors
              </li>
            </ul>
          </div>
          <button className="mt-6 text-sm font-medium px-4 py-3 rounded-md w-full bg-[#317B22] text-white hover:bg-green-700">
            Get started for free
          </button>
        </div>

        {/* Enterprise */}
        <div className="rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-full">
          <div className="flex-1">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold text-green-700 bg-[rgba(49,123,34,0.1)] px-3 py-1 rounded-full uppercase">
                ENTERPRISE
              </span>
            </div>
            <h3 className="text-3xl font-bold text-center mb-1">
              Custom pricing
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Up to 2 models free forever
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                AI-powered predictive search
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Unlimited document indexing
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Unlimited user accounts
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Dedicated support team
              </li>
              <li className="flex items-center">
                <span className="text-green-600 font-bold mr-2">✔</span>
                Custom integration solutions
              </li>
            </ul>
          </div>
          <button className="mt-6 text-sm font-medium px-4 py-3 rounded-md w-full bg-white text-black border border-[rgba(0,0,0,0.2)] hover:bg-gray-50">
            Get started for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
