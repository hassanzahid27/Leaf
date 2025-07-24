// import React from "react";
// import { Brain, Search, Rocket, ShieldCheck } from "lucide-react";

// const features = [
//   {
//     title: "AI-Driven Insights",
//     desc: "With lots of unique blocks, you can easily build a page without coding.",
//     icon: <Brain className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Unified Search Experience",
//     desc: "With lots of unique blocks, you can easily build a page without coding.",
//     icon: <Search className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Boosted Productivity",
//     desc: "With lots of unique blocks, you can easily build a page without coding.",
//     icon: <Rocket className="w-6 h-6 text-black" />,
//   },
//   {
//     title: "Secure & Compliant",
//     desc: "With lots of unique blocks, you can easily build a page without coding.",
//     icon: <ShieldCheck className="w-6 h-6 text-black" />,
//   },
// ];

// const KeyFeatures = () => {
//   return (
//     <section className="py-16 px-6 md:px-20">
//       <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
//         {/* Left Heading */}
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 md:w-1/2">
//           Let’s Explore our Top <br className="hidden md:block" /> Key Features
//         </h2>

//         {/* Right Description and Button */}
//         <div className="md:text-right md:w-1/2">
//           <p className="text-gray-600   ml-24 mr-8">
//             LeafAI Search sprouted from a simple idea: make enterprise knowledge
//           </p>

//           <p className="mr-74 mt-0 mb-4">
//             {" "}
//             as easy to find as a Google search{" "}
//           </p>

//           <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm mr-[420px] font-medium">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-24">
//         {features.map((feature, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl border border-gray-200 shadow-sm text-center px-14 py-12"
//           >
//             <div className="flex justify-center items-center w-10 h-10 bg-green-100 rounded-full mx-auto mb-4">
//               {feature.icon}
//             </div>
//             <h3 className="text-md font-semibold mb-2">{feature.title}</h3>
//             <p className="text-gray-600 text-sm">{feature.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;

import React from "react";
import { Brain, Search, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "AI-Driven Insights",
    desc: "With lots of unique blocks, you can easily build a page without coding.",
    icon: <Brain className="w-6 h-6 text-black" />,
  },
  {
    title: "Unified Search Experience",
    desc: "With lots of unique blocks, you can easily build a page without coding.",
    icon: <Search className="w-6 h-6 text-black" />,
  },
  {
    title: "Boosted Productivity",
    desc: "With lots of unique blocks, you can easily build a page without coding.",
    icon: <Rocket className="w-6 h-6 text-black" />,
  },
  {
    title: "Secure & Compliant",
    desc: "With lots of unique blocks, you can easily build a page without coding.",
    icon: <ShieldCheck className="w-6 h-6 text-black" />,
  },
];

const KeyFeatures = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        {/* Left Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 md:w-1/2">
          Let’s Explore our Top <br className="hidden md:block" /> Key Features
        </h2>

        {/* Right Description and Button */}
        <div className="md:w-1/2 w-full">
          <p className="text-gray-600 mb-2 md:ml-0">
            LeafAI Search sprouted from a simple idea: make enterprise knowledge
          </p>
          <p className="text-gray-600 mb-4 md:ml-0">
            as easy to find as a Google search
          </p>

          <div className="md:flex md:justify-end">
            <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-medium w-full md:w-auto mr-[550px]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm text-center px-8 py-10"
          >
            <div className="flex justify-center items-center w-10 h-10 bg-green-100 rounded-full mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-md font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
