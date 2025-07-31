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
          <p
            className="text-[#333333]
 mb-4 max-w-2xl"
          >
            LeafAI Search sprouted from a simple idea: make enterprise knowledge
            as easy to find as a Google search
          </p>

          <button
            className="bg-green-700 hover:bg-green-800 text-white px-7 py-3  rounded-lg  font-medium max-w-[165px] md:w-auto
  xl:mr-[400px] :mr-[630px]"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm text-center px-6 py-8 relative"
          >
            {/* Icon + Background Circle Combo */}
            <div className="relative max-w-16 max-h-16 mx-auto ">
              {/* Green Circle Behind */}
              <div className="absolute -top-0 -right-0 bg-[#B7DBAF] w-8 h-8 rounded-full "></div>

              {/* Icon */}
              <div className="relative z-48 flex items-center justify-center w-18 h-16 ">
                {feature.icon}
              </div>
            </div>

            {/* Title and Description */}

            <h3 className="text-xl font-bold ">{feature.title}</h3>
            <div className="flex items-center justify-center">
              <p className="text-gray-600 font-sans max-w-60 mt-3  ">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
