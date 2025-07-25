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
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
//         {/* Left Heading */}
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 md:w-1/2">
//           Let’s Explore our Top <br className="hidden md:block" /> Key Features
//         </h2>

//         {/* Right Description and Button */}
//         <div className="md:w-1/2 w-full">
//           <p className="text-gray-600 mb-2">
//             LeafAI Search sprouted from a simple idea: make enterprise knowledge
//           </p>
//           <p className="text-gray-600 mb-4">
//             as easy to find as a Google search
//           </p>

//           <div className="md:flex md:justify-end">
//             <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-medium w-full md:w-auto xl:mr-[630px]">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
//         {features.map((feature, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl border border-gray-200 shadow-sm text-center px-6 py-10 relative"
//           >
//             {/* Green Circle Background */}
//             <div className="bg-green-100 w-10 h-10 rounded-full absolute right-6 sm:right-10 md:right-20 lg:right-36"></div>

//             {/* Icon - Centered */}
//             <div className="flex justify-center items-center  h-16 w-16 mx-auto relative z-10">
//               {feature.icon}
//             </div>

//             <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 md:w-1/2">
          Let’s Explore our Top <br className="hidden md:block" /> Key Features
        </h2>

        <div className="md:w-1/2 w-full">
          <p className="text-gray-600 mb-2">
            LeafAI Search sprouted from a simple idea: make enterprise knowledge
          </p>
          <p className="text-gray-600 mb-4">
            as easy to find as a Google search
          </p>

          <div className="md:flex md:justify-end">
            <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-medium w-full md:w-auto xl:mr-[630px]">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm text-center px-6 py-12 relative"
          >
            {/* Icon + Background Circle Combo */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              {/* Green Circle Behind */}
              <div className="absolute -top-0 -right-2 bg-green-100 w-12 h-12 rounded-full "></div>

              {/* Icon */}
              <div className="relative z-48 flex items-center justify-center w-full h-full">
                {feature.icon}
              </div>
            </div>

            {/* Title and Description */}
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
