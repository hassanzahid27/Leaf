import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const steps = [
  {
    title: "Connect",
    desc: "Easily integrate LeafAI Search with your existing systems—Confluence, SharePoint, and document repositories.",
  },
  {
    title: "Index",
    desc: "Index your content securely to power enterprise-wide search.",
  },
  {
    title: "Enhance",
    desc: "Enrich results with AI-based intent and context understanding.",
  },
  {
    title: "Search",
    desc: "Search across all content types in one interface.",
  },
  {
    title: "Learn",
    desc: "Gain insights from what your users are searching.",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 px-4 md:px-20 bg-[#F9FAF9] rounded-xl mb-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How it Works</h2>
        <p className="text-gray-600 mt-2">
          Discover the power of intelligent search across{" "}
          <br className="hidden md:block" />
          your entire digital workspace.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-2 px-2 pb-8">
        {/* Left - Step List */}
        <div className="flex-1 space-y-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between rounded-lg px-6 py-5 cursor-pointer transition-all border border-[rgba(0,0,0,0.1)] ${
                activeStep === idx
                  ? "bg-[#317B22] text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() => setActiveStep(idx)}
            >
              <div>
                <h4 className="text-base font-semibold">{step.title}</h4>
                {activeStep === idx && (
                  <p className="text-sm mt-1 opacity-90">{step.desc}</p>
                )}
              </div>
              <div className="ml-2">
                {activeStep === idx ? (
                  <ChevronDown className="w-5 h-5 text-white" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right - Step Detail */}
        <div className="flex-1 bg-gray-50 rounded-xl shadow p-6 flex flex-col justify-between min-h-[400px] lg:h-[450px]">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Connect</h3>
            <p className="text-[#6D6D6D] mb-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              cupiditate illum quidem veniam a eum pariatur minima eius
              temporibus, iusto cumque sed recusandae perspiciatis doloremque
              nihil aspernatur officia quo! Consectetur.
            </p>
            <button className="bg-[#317B22] text-white text-sm px-4 py-2 rounded-md mb-4 md:mb-6">
              Get Started
            </button>
          </div>
          <img
            src="graph.png"
            alt="Graph"
            className="w-full max-h-52 object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
